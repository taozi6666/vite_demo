import axios from "@/request/axios";
import { loginUserInt } from "@/types/login";


export function getUserInfo (query:loginUserInt) {
  return axios({
    method:'post',
    url:'/api/login',
    params:query
  })
}