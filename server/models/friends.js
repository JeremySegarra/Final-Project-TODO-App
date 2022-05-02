const { db, isConnected, ObjectId } = require("./mongo");

//set environment variables on heroku as well the URI and changes this magic strings
const collection = db.db("Messenger-App").collection("Users");

async function addFriend(id, newFriend) {
  // console.log("Im inside the addFriend function in the model", id, body);
  const sessionPendingList = await collection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $push: { friendsList: newFriend } }
  );

  const sessionUser = await collection.findOne({ _id: new ObjectId(id) });

  //body.username is the person who sent the request and we need to update the friends array of that person to add the session user
  //so if bowser friend requests donald christian and donald accepts then we update both arrays so they both become friends
  const friendPendingList = await collection.findOneAndUpdate(
    { username: newFriend.username },
    {
      $push: {
        friendsList: {
          username: sessionUser.username,
          email: sessionUser.email,
          pic: sessionUser.pic,
        },
      },
    }
  );
  const response = await denyRequest(id, newFriend);
  console.log(
    "This is the response after denying request in addFriend model",
    response
  );

  // console.log(
  //   "sessionUser body",
  //   sessionUser.username,
  //   sessionUser.email,
  //   sessionUser.pic
  // );
  // console.log("This is body.id", body.id);
  // console.log("sessionUser in model", sessionUser);
  // console.log("friend That sent requests list in model", friendPendingList);

  return { ...sessionPendingList, password: undefined };
}

async function denyRequest(id, body) {
  if (body.currentTab === "friend-list") {
    const user = await collection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $pull: { friendsList: { username: body.username } } }
    );
    const sessionUser = await collection.findOne({ _id: new ObjectId(id) });

    const updateOtherUser = await collection.findOneAndUpdate(
      { username: body.username },
      { $pull: { friendsList: { username: sessionUser.username } } }
    );

    console.log("This is the user after deny request model", user);

    // console.log("This is the user after deny request model", user);
    return { ...user, password: undefined };
  } else {
    //Here i am finding the session user by id and removing from his/hers pendingRequests array by $pull which checks the condition of removing all occurences of that username
    const user = await collection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $pull: { pendingRequests: { username: body.username } } }
    );

    // console.log("This is the user after deny request model", user);
    return { ...user, password: undefined };
  }
}

async function getFriends(id) {
  //we find the session user by id and return the whole user which has the friends array
  const user = await collection.findOne({ _id: new ObjectId(id) });

  return { ...user, password: undefined };
}

async function friendRequest(id, body) {
  console.log("Im inside the addFriend function", id, body);
  const user = await collection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $push: { pendingRequests: body } }
  );

  return { ...user, password: undefined };
}

module.exports.denyRequest = denyRequest;
module.exports.addFriend = addFriend;
module.exports.friendRequest = friendRequest;
module.exports.getFriends = getFriends;
