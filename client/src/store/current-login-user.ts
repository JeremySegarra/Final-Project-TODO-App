import { LoginStore } from "./login-session";
import { userCounter } from "./user";

export function loggedInUser() {
  const loginStore = LoginStore();
  const user = userCounter();
  const sessionUser = loginStore.session.user?.username;
  const loggedInUserData = user.list.find((u) => u.username === sessionUser);
  return loggedInUserData;
}
