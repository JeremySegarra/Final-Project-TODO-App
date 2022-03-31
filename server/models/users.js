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
    id: 0,
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
    id: 1,
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
    id: 2,
  },
];

function get(id) {
  return {
    ...list.find((user) => user.id === parseInt(id)),
    password: undefined,
    verifypass: undefined,
  };
}

module.exports.list = list;
module.exports.get = get;
