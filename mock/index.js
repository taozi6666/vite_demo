import { rnUserInfo } from "./login.ts";
export default [
  {
      url: "/api/login",
      method: "post",
      response: rnUserInfo
  }
]