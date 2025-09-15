import axios from "axios";

const request = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

const requestV2 = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_2,
  headers: {
    "Content-Type": "multipart/form-data",
  },
  timeout: 10000,
});

//V1
export const get = async (path, option = {}) => {
  const response = await request.get(path, option);
  return response.data;
};

export const del = async (path, option = {}) => {
  const response = await request.delete(path, option);
  return response.data;
};

export const post = async (path, data = {}, option = {}) => {
  const response = await request.post(path, data, option);
  return response.data;
};

export const patch = async (path, data = {}, option = {}) => {
  const response = await request.patch(path, data, option);
  return response.data;
};

//V2
export const postV2 = async (path, data = {}, option = {}) => {
  const response = await requestV2.post(path, data, option);
  return response.data;
};

export const patchV2 = async (path, data = {}, option = {}) => {
  const response = await requestV2.patch(path, data, option);
  return response.data;
};

export default request;
