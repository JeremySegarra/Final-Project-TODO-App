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
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    verifypass: "",
    recievedMessages: [],
    myMessages: [],
    sentMessages: [],
    id: 0,
  },
];
