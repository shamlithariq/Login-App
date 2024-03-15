import axios from "axios"

export const api = axios.create({
  baseURL: "http://demo.mypits.org/api/v1",
  withCredentials: false,
  headers: {
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
}
});

const errorHandler = (error) => {
  const statusCode = error.response?.status;

  if (statusCode) {
    console.error(error)
  }
  return Promise.reject(error)
}

api.interceptors.response.use(undefined, (error) => {
  return errorHandler(error)
})