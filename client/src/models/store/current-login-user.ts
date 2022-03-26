import { LoginStore } from "./login-session";
import { userStore } from "./user";

export function loggedInUser() {
  const loginStore = LoginStore();
  return loginStore.$state.session.user;
}
