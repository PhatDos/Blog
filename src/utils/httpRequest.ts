import axios, { AxiosRequestConfig } from "axios";

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

// ==== V1 ====
export const get = async <T = any>(
  path: string,
  option: AxiosRequestConfig = {}
): Promise<T> => {
  const response = await request.get<T>(path, option);
  return response.data;
};

export const del = async <T = any>(
  path: string,
  option: AxiosRequestConfig = {}
): Promise<T> => {
  const response = await request.delete<T>(path, option);
  return response.data;
};

export const post = async <T = any>(
  path: string,
  data: any = {},
  option: AxiosRequestConfig = {}
): Promise<T> => {
  const response = await request.post<T>(path, data, option);
  return response.data;
};

export const patch = async <T = any>(
  path: string,
  data: any = {},
  option: AxiosRequestConfig = {}
): Promise<T> => {
  const response = await request.patch<T>(path, data, option);
  return response.data;
};

// ==== V2 ====
export const postV2 = async <T = any>(
  path: string,
  data: any = {},
  option: AxiosRequestConfig = {}
): Promise<T> => {
  const response = await requestV2.post<T>(path, data, option);
  return response.data;
};

export const patchV2 = async <T = any>(
  path: string,
  data: any = {},
  option: AxiosRequestConfig = {}
): Promise<T> => {
  const response = await requestV2.patch<T>(path, data, option);
  return response.data;
};

export default request;
