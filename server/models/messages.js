const { db, isConnected, ObjectId } = require("./mongo");

//set environment variables on heroku as well the URI and changes this magic strings
const collection = db.db("Messenger-App").collection("Users");

async function create(message, user) {
  const updateMessages = await collection.findOneAndUpdate(
    { username: user.username },
    { $push: { myMessages: message } }
  );

  const myMessages = await collection.findOne({ username: user.username });

  return myMessages;
}

async function sendMessage(message, user) {
  //Here i update the logged in user's sentMessages array
  const sessionUserSent = await collection.findOneAndUpdate(
    { username: user.username },
    { $push: { sentMessages: message } }
  );

  //now i need to update the recievers recievedMessages array
  const friendRecieved = await collection.findOneAndUpdate(
    { username: message.reciever },
    { $push: { recievedMessages: message } }
  );

  return { user: sessionUserSent, friend: friendRecieved };
}

async function deleteMessage(user, message) {
  let tab;

  switch (message.currentTab) {
    case "my-list":
      tab = "myMessages";
      break;
    case "recieved":
      tab = "recievedMessages";
      break;
    default:
      tab = "sentMessages";
  }
  console.log("Im inside delete here is the message", message);

  const deleteMessage = await collection.findOneAndUpdate(
    { username: user.username },
    { $pull: { [tab]: { message: message.message } } }
  );

  console.log(
    "Im inside delete here is the message",
    deleteMessage.deleteMessage
  );

  return { deleted_message: deleteMessage };
}

module.exports.create = create;
module.exports.sendMessage = sendMessage;
module.exports.deleteMessage = deleteMessage;
