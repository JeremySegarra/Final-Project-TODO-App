/*
 */

export interface User {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  verifypass: string;
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
    id: 0,
  },
];
