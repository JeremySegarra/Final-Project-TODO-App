// import { defineStore, storeToRefs } from "pinia";
// import * as users from "../models/user";
// import * as loggedUser from "../store/login-session";

// export const MessagesStore = defineStore("messages", {
//   state: () => ({
//     store: users.list,
//   }),
//   actions: {
//     addMessage(sub: string, text: string, username: string | undefined) {
//       console.log("I am inside addMessage the username is: ", username);

//       const loginStore = loggedUser.LoginStore();
//       const currentUser = loginStore.session.user?.username;
//       const sendToUser = this.store.find((u) => u.username === username);
//       console.log("Iam i undefined?");

//       console.log(sendToUser);

//       sendToUser?.myMessages.push({
//         isActive: false,
//         completed: false,
//         subject: sub,
//         message: text,
//         reciever: "this is a test",
//         sender: currentUser,
//       });

//       console.log(
//         "This user should have made his own message: ",
//         sendToUser?.username
//       );
//       console.log("See if the username matches the logged in user");

//       console.log(loginStore.session.user);

//       console.log("This is send to user");

//       console.table(sendToUser);
//     },
//     deleteMessage(index: number) {
//       const loginStore = loggedUser.LoginStore();
//       const currentUser = loginStore.session.user?.username;
//       const sendToUser = this.store.find((id) => id.id === index);

//       // const sendToUser = users.list.find((u) => u.username === currentUser);
//       console.log("This is the index", index);
//       console.log("This is the current user: ", currentUser);
//       console.log(loginStore.session.user);
//       console.log("this is the users myMessages property");

//       // console.log(loginStore.session.user?.myMessages);
//       console.log(sendToUser?.myMessages);
//       sendToUser?.myMessages.splice(index, 1);
//       // loginStore.session.user?.myMessages.splice(index, 1);
//     },
//     sendMessage(sub: string, text: string, username: string) {
//       //this needs to search the specific users list and add this
//       //message to thier message property and add to sentmessages array for personal account
//       //I want to search the list for a certain user, if they exist in the list then update
//       //that current users recieved message object
//       const loginStore = loggedUser.LoginStore();
//       const currentUser = loginStore.session.user?.username;
//       const sendToUser = users.list.find((u) => u.username === username);

//       //populates the users recived we want to send a message too
//       sendToUser?.recievedMessages.push({
//         isActive: false,
//         completed: false,
//         subject: sub,
//         message: text,
//         reciever: sendToUser.username,
//         sender: currentUser,
//       });

//       //populates the currently logged in users sent messages
//       //fix this so it does not send the message but puts it in personal sent messages
//       sendToUser?.sentMessages.push({
//         isActive: false,
//         completed: false,
//         subject: sub,
//         message: text,
//         reciever: sendToUser?.username,
//         sender: currentUser,
//       });

//       console.log(
//         "This user should have recieved a message: ",
//         sendToUser?.username
//       );

//       console.table(sendToUser);
//     },
//   },
// });
