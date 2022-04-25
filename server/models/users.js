const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { db, isConnected, ObjectId } = require("./mongo");

//set environment variables on heroku as well the URI and changes this magic strings
const collection = db.db("Messenger-App").collection("Users");

const list = [
  {
    firstName: "administrator",
    lastName: "admin",
    username: "admin",
    email: "admin",
    password: "k",
    pic: "https://randomuser.me/api/portraits/men/1.jpg",
    recievedMessages: [],
    myMessages: [],
    sentMessages: [],
    pendingRequests: [],
    friendsList: [],
  },
  {
    firstName: "jeremy",
    lastName: "segarra",
    username: "jeremypro",
    email: "j@gmail.com",
    password: "cracatoa",
    pic: "https://randomuser.me/api/portraits/men/2.jpg",
    recievedMessages: [],
    myMessages: [],
    sentMessages: [],
    pendingRequests: [],
    friendsList: [],
  },
  {
    firstName: "karen",
    lastName: "smith",
    username: "karenpro",
    email: "ksmith@gmail.com",
    password: "password",
    pic: "https://randomuser.me/api/portraits/men/3.jpg",
    recievedMessages: [],
    myMessages: [],
    sentMessages: [],
    pendingRequests: [],
    friendsList: [],
  },
  {
    firstName: "donald",
    lastName: "christan",
    username: "dc",
    email: "dcmith@gmail.com",
    password: "password",
    pic: "https://randomuser.me/api/portraits/men/4.jpg",
    recievedMessages: [],
    myMessages: [],
    sentMessages: [],
    pendingRequests: [],
    friendsList: [],
  },
];

async function getList() {
  return (await collection.find().toArray()).map((user) => ({
    ...user,
    password: undefined,
    verifypass: undefined,
  }));
}

async function get(id) {
  const user = await collection.findOne({ _id: new ObjectId(id) });
  // console.log("Im inside the get function", user);

  return { ...user, password: undefined, verifypass: undefined };
}

function remove(id) {
  //findIndex returns the number the actual index not the object like the find() method
  // Returns An array containing the deleted elements.
  // If only one element is removed, an array of one element is returned.
  // If no elements are removed, an empty array is returned.
  const index = list.findIndex((user) => user.id === parseInt(id));
  const user = list.splice(index, 1);

  return { ...user[0], password: undefined, verifypass: undefined };
}

async function update(id, newUser) {
  newUser.username = await collection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: newUser },
    { returnDocument: "after" }
  );
  return { ...newUser, password: undefined, verifypass: undefined };
}

async function login(username, password) {
  const user = await collection.findOne({ username });
  // console.log("This is the user ---- ", user);
  if (!user) {
    throw {
      statusCode: 404,
      message: "User not found please re-enter username",
    };
  }
  //user.password needs to access our database
  if (!(await bcrypt.compare(password, user.password))) {
    throw { statusCode: 401, message: "Incorrect password" };
  }

  const data = { ...user, password: undefined, verifypass: undefined };
  const token = jwt.sign(data, process.env.JWT_SECRET);

  return { ...data, token };
}

function verifyToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.log("This is the error in verifyToken", err);
        reject(err);
      } else {
        console.log("This is the decoded token in verifyToken", decoded);
        resolve(decoded);
      }
    });
  });
}

//dont really need this function just a test
function seed() {
  return list.forEach(async (x) => {
    create(x);
  });
}

async function verifyUserCredentials(
  firstname,
  lastname,
  username,
  email,
  password
) {
  if (firstname === "") {
    throw {
      statusCode: 404,
      message: "Please enter a first name",
      type: "firstname",
    };
  }
  if (lastname === "") {
    throw {
      statusCode: 404,
      message: "Please enter a last name",
      type: "lastname",
    };
  }
  if (username === "" || username === undefined) {
    throw {
      statusCode: 404,
      message: "Please enter a username",
      type: "username",
    };
  }
  if (email === "") {
    throw { statusCode: 404, message: "Please enter an email", type: "email" };
  }

  const user = await collection.findOne({
    username,
  });

  if (user) {
    throw {
      statusCode: 404,
      message: "User already exists, please enter a new username",
      type: "username",
    };
  }
}

async function create(newUser) {
  newUser.password = await bcrypt.hash(
    newUser.password,
    +process.env.SALT_ROUNDS
  );

  collection.insertOne(newUser);

  return { ...newUser, password: undefined, verifypass: undefined };
}

module.exports.list = list;
module.exports.collection = collection;
module.exports.getList = getList;
module.exports.get = get;
module.exports.remove = remove;
module.exports.update = update;
module.exports.login = login;
module.exports.verifyToken = verifyToken;
module.exports.seed = seed;
module.exports.verifyUserCredentials = verifyUserCredentials;
module.exports.create = create;
