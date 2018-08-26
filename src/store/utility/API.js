import axios from "axios";

export const postEmailPassword = (email, password) => {
  return axios.post("https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAEyDsrBHsnHoEItk9PgshoujhrTk0ZlAA", { email, password, returnSecureToken: true });
};

export const postRefreshToken = () => {
  return axios.post("https://securetoken.googleapis.com/v1/token?key=AIzaSyAEyDsrBHsnHoEItk9PgshoujhrTk0ZlAA", { grant_type: "refresh_token", refresh_token: localStorage.refreshTokenRequirements });
};

// export const getRequirements = () => {
//   return axios.get("https://requirements-c506c.firebaseio.com/requirements.json")
// }

// export const getOffices = () => {
//   return axios.get("https://requirements-c506c.firebaseio.com/offices.json")
// }

// export const getRailLoads1 = () => {
//   return axios.get("https://requirements-c506c.firebaseio.com/railLoads1.json")
// }

// export const getRailLoads2 = () => {
//   return axios.get("https://requirements-c506c.firebaseio.com/railLoads2.json")
// }

export const getData = (table) => {
  return axios.get(`https://requirements-c506c.firebaseio.com/${table}.json`)
}

// export const postRequirement = (token, сustomer, documentation, releaseSheetLink, releaseSheetAE) => {
//   return axios.post(`https://requirements-c506c.firebaseio.com/requirements.json?auth=${token}`, {
//     сustomer,
//     documentation,
//     releaseSheetLink,
//     releaseSheetAE
//   });
// };

// export const postOffices = (token, office, abbreviation, leader, GSM) => {
//   return axios.post(`https://requirements-c506c.firebaseio.com/offices.json?auth=${token}`, {
//     office,
//     abbreviation,
//     leader,
//     GSM
//   });
// };

// export const postRailLoads1 = (token, SCAC, carrier) => {
//   return axios.post(`https://requirements-c506c.firebaseio.com/railLoads1.json?auth=${token}`, {
//     SCAC,
//     carrier
//   });
// };

// export const postRailLoads2 = (token, equipmentType, abbreviation) => {
//   return axios.post(`https://requirements-c506c.firebaseio.com/railLoads2.json?auth=${token}`, {
//     equipmentType,
//     abbreviation
//   });
// };

export const postRow = (table, token, payload) => {
  return axios.post(`https://requirements-c506c.firebaseio.com/${table}.json?auth=${token}`, payload);
};