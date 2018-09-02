import axios from "axios";

export const postEmailPassword = (email, password) => {
  return axios.post("https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAEyDsrBHsnHoEItk9PgshoujhrTk0ZlAA", { email, password, returnSecureToken: true });
};

export const postRefreshToken = () => {
  return axios.post("https://securetoken.googleapis.com/v1/token?key=AIzaSyAEyDsrBHsnHoEItk9PgshoujhrTk0ZlAA", { grant_type: "refresh_token", refresh_token: localStorage.refreshTokenRequirements });
};

export const getData = (table) => {
  return axios.get(`https://requirements-c506c.firebaseio.com/${table}.json`)
}

export const postRow = (token, table, row) => {
  return axios.post(`https://requirements-c506c.firebaseio.com/${table}.json?auth=${token}`, row);
};

export const patchRow = (token, table, id, row) => {
  return axios.patch(`https://requirements-c506c.firebaseio.com/${table}/${id}.json?auth=${token}`, row);
};

export const deleteRow = (token, table, id) => {
  return axios.delete(`https://requirements-c506c.firebaseio.com/${table}/${id}.json?auth=${token}`)
}