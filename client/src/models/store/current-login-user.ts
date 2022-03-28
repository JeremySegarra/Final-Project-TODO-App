import { LoginStore } from "./login-session";

export function loggedInUser() {
  const loginStore = LoginStore();
  return loginStore.$state.session.user;
}
