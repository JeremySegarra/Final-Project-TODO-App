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
    verifypass: "k",
    recievedMessages: [],
    myMessages: [],
    sentMessages: [],
  },
  {
    firstName: "jeremy",
    lastName: "segarra",
    username: "jeremypro",
    email: "j@gmail.com",
    password: "cracatoa",
    verifypass: "cracatoa",
    recievedMessages: [],
    myMessages: [],
    sentMessages: [],
  },
  {
    firstName: "karen",
    lastName: "smith",
    username: "karenpro",
    email: "ksmith@gmail.com",
    password: "password",
    verifypass: "password",
    recievedMessages: [],
    myMessages: [],
    sentMessages: [],
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
  console.log("Im inside the get function", user);

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
  const index = list.findIndex((user) => user.id === parseInt(id));
  const oldUser = list[index];

  newUser.password = await bcrypt.hash(newUser.password, 10);
  console.log("This is the list in update ---- ", list);
  console.log("This is the old user ---- ", oldUser);
  console.log("This is the new user ---- ", newUser);

  newUser = list[index] = { ...oldUser, ...newUser };
  console.log("This is the newUser in update after update ---- ", newUser);

  return { ...newUser, password: undefined, verifypass: undefined };
}

async function login(username, password) {
  const user = await collection.findOne({ username });
  console.log("This is the user ---- ", user);
  if (!user) {
    throw { statusCode: 404, message: "User not found" };
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
        reject(err);
      } else {
        resolve(decoded);
      }
    });
  });
}

//dont really need this function just a test
function seed() {
  return collection.insertMany(list);
}

async function verifyUserCredentials(
  firstname,
  lastname,
  username,
  email,
  password
) {
  if (firstname === "") {
    throw { statusCode: 404, message: "Please enter a first name" };
  }
  if (lastname === "") {
    throw { statusCode: 404, message: "Please enter a last name" };
  }
  if (username === "") {
    throw { statusCode: 404, message: "Please enter a username" };
  }
  if (email === "") {
    throw { statusCode: 404, message: "Please enter an email" };
  }

  const user = await collection.findOne({
    username,
  });

  if (user) {
    throw {
      statusCode: 404,
      message: "User already exists, please enter a new username",
    };
  }
}

async function create(newUser) {
  newUser.password = await bcrypt.hash(
    newUser.password,
    +process.env.SALT_ROUNDS
  );
  console.log("Im in the create function moron!");

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
