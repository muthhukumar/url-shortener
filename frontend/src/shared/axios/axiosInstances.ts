import axios from "axios";

const instance = axios.create({
  baseURL: "localhost:5000/",
});

instance.defaults.headers.common["Authorization"] = "";
instance.defaults.headers.post["Content-Type"] = "application/json";

export default instance;
