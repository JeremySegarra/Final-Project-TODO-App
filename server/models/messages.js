const { db, isConnected, ObjectId } = require("./mongo");

//set environment variables on heroku as well the URI and changes this magic strings
const collection = db.db("Messenger-App").collection("Users");

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

  const deleteMessage = await collection.findOneAndUpdate(
    { username: user.username },
    { $pull: { [tab]: { message: message.message } } }
  );

  return { deleted_message: deleteMessage };
}

module.exports.sendMessage = sendMessage;
module.exports.deleteMessage = deleteMessage;
