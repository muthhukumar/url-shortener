import axios from "../axios/axiosInstances";
type Fetch = (
  method: "post" | "patch" | "get" | "delete",
  data: any,
  url: string,
  token: string | null
) => Promise<any>;

export const getData: Fetch = async (method, data, url, token) => {
  let headers;
  if (token) headers = { Authorization: "Bearer " + token };
  return axios({
    method,
    data,
    headers,
    url,
  })
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};
