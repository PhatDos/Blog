import axios, { AxiosInstance } from "axios";

type ClientType = "json" | "form";

export class ApiClientFactory {
  static create(type: ClientType): AxiosInstance {
    switch (type) {
      case "json":
        return axios.create({
          baseURL: process.env.REACT_APP_BASE_URL,
          headers: { "Content-Type": "application/json" },
          timeout: 10000,
        });
      case "form":
        return axios.create({
          baseURL: process.env.REACT_APP_BASE_URL_2,
          headers: { "Content-Type": "multipart/form-data" },
          timeout: 10000,
        });
      default:
        throw new Error(`Unknown client type: ${type}`);
    }
  }
}
