import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/",
});

// instance.defaults.headers.common["Authorization"] = token;
instance.defaults.headers.post["Content-Type"] = "application/json";

export default instance;
