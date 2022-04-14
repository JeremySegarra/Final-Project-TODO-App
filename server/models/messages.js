const { db, isConnected, ObjectId } = require("./mongo");

//set environment variables on heroku as well the URI and changes this magic strings
const collection = db.db("Messenger-App").collection("Users");

async function getFriends(id) {
  const user = await collection.findOne({ _id: new ObjectId(id) });
  console.log("Im inside the getFriends function", user);

  return { ...user, password: undefined };
}

module.exports.getFriends = getFriends;
