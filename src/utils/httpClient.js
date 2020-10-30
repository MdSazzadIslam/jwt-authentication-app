import axios from "axios";
const token = localStorage.getItem("token");
const url = "http://localhost:7270";

export default axios.create({
  baseURL: url,
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${token}`,
    responseType: "json",
  },
});

//here i am passing jwt token through headers
//which will i get after successfull authentication from API
