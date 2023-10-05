import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://cricket-api-dev.pahal.cloud",
});

axiosInstance.defaults.headers.common.accept = "*/*";
axiosInstance.defaults.headers.common.rid = "anti-csrf";

const axiosWithApi = ({ url, method, headers = null, body = null }) => {
  console.log(url);
  return axiosInstance[method](url, JSON.parse(body), JSON.parse(headers));
};

export default axiosWithApi;
