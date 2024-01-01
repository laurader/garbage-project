import axios from "axios";
//import i18n from "../translations/strings";
// import {
//   ACCESS_TOKEN_KEY,
//   getStringFromStorageGenerator,
// } from "../utils/local-storage";
//import log from "../utils/log";

export interface ApiResponse {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

export interface ApiError {
  localizedMessage: string;
  statusCode?: number;
  errorCode?: number;
  config?: any;
}
const BASE_URL = "https://jsonplaceholder.typicode.com";
const request = async function (
  options: any,
  isAuthenticated = true,
  isMultipartFormData = false
) {
  type Header = {
    "Content-Type": string;
    Authorization?: string;
    "ngrok-skip-browser-warning"?: string;
    Origin?: string;
  };

  let header: Header = {
    "Content-Type": isMultipartFormData
      ? "multipart/form-data"
      : "application/json",
  };

  // if (process.env.NODE_ENV === 'development') {
  //   header['Origin'] = 'http://localhost:3000/'
  //   header['ngrok-skip-browser-warning'] = 'poba'
  // }

  //   if (isAuthenticated) {
  //     let token = getStringFromStorageGenerator(ACCESS_TOKEN_KEY);
  //     header["Authorization"] = `Bearer ${token}`;
  //   }

  //   log.debug("header: ", header);
  //   log.info("options: ", options);
  const client = axios.create({
    baseURL: BASE_URL,
    headers: header,
  });

  const onSuccess = (response: any) => {
    // log.info("request onSuccess");
    // log.debug("request onSuccess", response.data);
    return response;
  };

  const onError = (error: any) => {
    // log.info("request onError", error);
    const errorKey =
      error.response?.data?.error?.localized_error || error.message;
    // log.debug("errorKey: ", errorKey);
    // log.debug("error.response?.data", error.response?.data);
    // @ts-ignore
    const errorMessage = i18n.t(`apiError.${errorKey}`);
    const apiError: ApiError = {
      localizedMessage: errorMessage,
      statusCode: error.response.status,
      errorCode: error.response?.data?.error?.code,
      config: error.config,
    };
    // log.debug("ApiError: ", apiError);
    return Promise.reject(apiError);
  };

  return client(options)
    .then(onSuccess)
    .catch((e) => console.log(e.message)); // todo implement error handling
};

export default request;
