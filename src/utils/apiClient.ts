import { AxiosRequestConfig } from "axios";
import { ApiClientFactory } from "./apiClientFactory";

// Khởi tạo client
const jsonClient = ApiClientFactory.create("json");
const formClient = ApiClientFactory.create("form");

// Hàm xử lý request chung
async function request<T>(
  client: typeof jsonClient,
  method: "get" | "post" | "patch" | "delete",
  path: string,
  data?: any,
  option: AxiosRequestConfig = {},
): Promise<T> {
  const config: AxiosRequestConfig =
    method === "get" || method === "delete" ? option : { ...option, data };

  const response = await client.request<T>({
    url: path,
    method,
    ...config,
  });

  return response.data;
}

// ==== Export API V1 (json) ====
export const get = <T = any>(path: string, option: AxiosRequestConfig = {}) =>
  request<T>(jsonClient, "get", path, undefined, option);

export const del = <T = any>(path: string, option: AxiosRequestConfig = {}) =>
  request<T>(jsonClient, "delete", path, undefined, option);

export const post = <T = any>(
  path: string,
  data: any = {},
  option: AxiosRequestConfig = {},
) => request<T>(jsonClient, "post", path, data, option);

export const patch = <T = any>(
  path: string,
  data: any = {},
  option: AxiosRequestConfig = {},
) => request<T>(jsonClient, "patch", path, data, option);

// ==== Export API V2 (form) ====
export const postV2 = <T = any>(
  path: string,
  data: any = {},
  option: AxiosRequestConfig = {},
) => request<T>(formClient, "post", path, data, option);

export const patchV2 = <T = any>(
  path: string,
  data: any = {},
  option: AxiosRequestConfig = {},
) => request<T>(formClient, "patch", path, data, option);

// Default export (client JSON)
export default jsonClient;
