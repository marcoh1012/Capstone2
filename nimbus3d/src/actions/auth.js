import { LOG_IN, LOG_OUT } from "./types";

function LogIn(data) {
  window.localStorage.setItem('token', JSON.stringify(data));
  return { type: LOG_IN, payload: data }
}

function LogOut() {
    return {type: LOG_OUT}
    
}

export { LogIn, LogOut,}