import axios from "axios";

const lambdaApi = axios.create({
  baseURL: "https://1p0btfnke9.execute-api.us-east-1.amazonaws.com",
  headers: {
    "Content-Type": "application/json"
  }
});

export {
  lambdaApi
}