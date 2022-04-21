/*
 */

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  pic: string;
  recievedMessages: Array<any>;
  myMessages: Array<any>;
  sentMessages: Array<any>;
  pendingRequests: Array<Object>;
  friendsList: Array<Object>;
  token: string;
}

export const list: User[] = [
  {
    _id: "",
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    pic: "",
    recievedMessages: [],
    myMessages: [],
    sentMessages: [],
    pendingRequests: [{}],
    friendsList: [{}],
    token: "",
  },
];
