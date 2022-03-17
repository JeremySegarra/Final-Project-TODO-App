/*
 */

export interface User {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  verifypass: string;
  recievedMessages: Array<any>;
  myMessages: Array<any>;
  sentMessages: Array<any>;
  id: number;
}

export const list: User[] = [
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
];
