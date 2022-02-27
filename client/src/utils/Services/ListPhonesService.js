import axios from "axios";

const urlBackend = "http://localhost:3001/api/phones";

export const getPhonesList = () => {
  return axios
    .get(urlBackend)
    .then((response) => response.data)
    .catch((error) => {
      throw new Error("Error retrieving the Phones information", error);
    });
};
