import axios from "axios";

const request = axios.create({
  baseURL: "https://backend-quiz-627bed8ec3c5.herokuapp.com/v1",
  headers: {
    "Content-Type": "application/json"
  }
});

export default request;
