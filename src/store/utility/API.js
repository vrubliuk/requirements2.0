import axios from "axios";

export const postEmailPassword = (email, password) => {
  return axios.post("https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAEyDsrBHsnHoEItk9PgshoujhrTk0ZlAA", { email, password, returnSecureToken: true });
};

export const postRefreshToken = () => {
  return axios.post("https://securetoken.googleapis.com/v1/token?key=AIzaSyAEyDsrBHsnHoEItk9PgshoujhrTk0ZlAA", { grant_type: "refresh_token", refresh_token: localStorage.refreshToken });
};