import axios from "axios";

export const postEmailPassword = (email, password) => {
  return axios.post("https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAEyDsrBHsnHoEItk9PgshoujhrTk0ZlAA", { email, password, returnSecureToken: true });
};

export const postRefreshToken = () => {
  return axios.post("https://securetoken.googleapis.com/v1/token?key=AIzaSyAEyDsrBHsnHoEItk9PgshoujhrTk0ZlAA", { grant_type: "refresh_token", refresh_token: localStorage.refreshToken });
};

export const getRequirements = () => {
  return axios.get("https://requirements-c506c.firebaseio.com/requirements.json")
}

export const getOffices = () => {
  return axios.get("https://requirements-c506c.firebaseio.com/offices.json")
}

export const getRailLoads1 = () => {
  return axios.get("https://requirements-c506c.firebaseio.com/railLoads1.json")
}

export const getRailLoads2 = () => {
  return axios.get("https://requirements-c506c.firebaseio.com/railLoads2.json")
}

export const postRequirement = (token, сustomer, documentation, releaseSheetLink, releaseSheetAE) => {
  return axios.post(`https://requirements-c506c.firebaseio.com/requirements.json?auth=${token}`, {
    сustomer,
    documentation,
    releaseSheetLink,
    releaseSheetAE
  });
};
