import { defineStore } from "pinia";
import { api } from "../myFetch";
import { LoginStore } from "./login-session";
import { apiLogin, modulerApi } from "../myFetch";

export const useFriends = defineStore("friends", {
  state: () => ({
    friendsList: [],
    allUsers: [],
    pendingRequests: [],
  }),
  actions: {
    async addFriend(index: number) {
      //this function will add a user from the pending request list, remove that user and add it to the friends list of the logged in user
      //When the user accepts the request boths users will be added to each other's friends list
      const useStore = LoginStore();
      const sessionUser = useStore.session.user;

      if (!sessionUser) {
        throw new Error("You must be logged in to add friends");
      }

      const user = JSON.parse(JSON.stringify(this.pendingRequests[index]));
      //may need to pass headers here for logged in user token for security
      try {
        const response = await modulerApi(
          `friends/add_friend/${sessionUser._id}`,
          user,
          "POST"
        );
        console.log("This is the response to add a new user", response);
      } catch (err) {
        console.log("This is the error for the add friend", err);
      }
    },

    async removePendingRequest(index: number, tab: string) {
      //this function will remove the user from the pending request list of the logged in user
      const useStore = LoginStore();
      const sessionUser = useStore.session.user;
      let user;
      if (!sessionUser) {
        throw new Error("You must be logged in to add friends");
      }

      if (tab === "friend-list") {
        user = JSON.parse(JSON.stringify(this.friendsList[index]));
      } else {
        user = JSON.parse(JSON.stringify(this.pendingRequests[index]));
      }

      try {
        const response = await modulerApi(
          `friends/deny_request/${sessionUser._id}`,
          { ...user, currentTab: tab },
          "PATCH"
        );
        console.log(
          "This is the response to remove a pending request or friend",
          response
        );
      } catch (err) {
        console.log(
          "This is the error for the remove pending request or friend",
          err
        );
      }
    },

    async friendRequest(index: number) {
      const useStore = LoginStore();
      const sessionUser = useStore.session.user;

      if (!sessionUser) {
        throw new Error("You must be logged in to send requests");
      }

      const user = JSON.parse(JSON.stringify(this.allUsers[index]));

      console.log(
        "We click addFriend button and find the user in the list by id, Then we send the that id to the api, to then add the body of the request to that users pending request list ",
        user
      );

      try {
        const response = await apiLogin(`friends/friend_request/${user._id}`, {
          username: sessionUser.username,
          email: sessionUser.email,
          pic: sessionUser.pic,
        });
        console.log(
          "Im in the try catch here is the response, ",
          response.data
        );
      } catch (err) {
        console.log("this is the error in the try catch", err);
      }
    },

    async fetchAll() {
      this.allUsers = (await api("users")).data;
    },

    async fetchFriends() {
      const useLoginStore = LoginStore();

      if (!useLoginStore.session.user) {
        throw new Error("You must be logged in to fetch friends");
      }

      const latestFriends = (
        await api(`friends/${useLoginStore.session.user._id}`)
      ).data;

      this.friendsList = latestFriends.friendsList;
    },

    async fetchPendingRequests() {
      const useLoginStore = LoginStore();

      if (!useLoginStore.session.user) {
        throw new Error("You must be logged in to fetch friends");
      }

      const latestRequests = (
        await api(`friends/${useLoginStore.session.user._id}`)
      ).data;

      this.pendingRequests = latestRequests.pendingRequests;
    },
  },
});
