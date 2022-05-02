const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { db, isConnected, ObjectId } = require("./mongo");

//set environment variables on heroku as well the URI and changes this magic strings
const collection = db.db("Messenger-App").collection("Budget");

async function create(storage, user) {
  console.log("This is the budget model storage", storage);
  //i want to get the budget from the user
  const userBudget = await collection.findOne({ user: user.username });

  //if we found no budget the create it for the user
  if (userBudget === null) {
    console.log("We are creating a new budget for the user");
    const budget = await collection.insertOne({
      user: user.username,
      budget: storage.balance,
      items: [],
    });
    return { ...budget };
  } else {
    console.log(
      "We are updating the budget for the user and fetching the data to send to the client"
    );
    const budget = await collection.findOne({ user: user.username });
    return { ...budget };
  }
}

async function addFunds(amount, user) {
  //find the user and increment the balance by the amount chosen
  const updateBalance = await collection.findOneAndUpdate(
    { user: user.username },
    { $inc: { budget: amount.budget } }
  );

  const newBudget = await collection.findOne({ user: user.username });

  console.log("this is the new balance", newBudget);

  return newBudget;
}

async function removeFunds(amount, user) {
  //find the user and decrement the balance by the amount chosen
  const updateBalance = await collection.findOneAndUpdate(
    { user: user.username },
    { $inc: { budget: -amount.budget } }
  );

  const newBudget = await collection.findOne({ user: user.username });

  return newBudget;
}

async function addItem(item, user) {
  console.log("Im in addItem model", item);

  if (item.amount === 0 && item.itemDescription === "") {
    const newItems = await collection.findOne({ user: user.username });
    return newItems;
  }

  const updateBudget = await collection.findOneAndUpdate(
    { user: user.username },
    { $inc: { budget: -item.amount } }
  );

  const updateItems = await collection.findOneAndUpdate(
    { user: user.username },
    { $push: { items: item } }
  );

  const newItems = await collection.findOne({ user: user.username });

  return newItems;
}

async function removeItem(item, user) {
  const updateItems = await collection.findOneAndUpdate(
    { user: user.username },
    { $pull: { items: { itemDescription: item.itemDescription } } }
  );

  const newItems = await collection.findOne({ user: user.username });

  return newItems;
}

module.exports.create = create;
module.exports.addFunds = addFunds;
module.exports.removeFunds = removeFunds;
module.exports.addItem = addItem;
module.exports.removeItem = removeItem;
