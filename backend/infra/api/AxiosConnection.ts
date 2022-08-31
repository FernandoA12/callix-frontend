import { Connection } from "./Connection";
import axios, { AxiosInstance } from "axios";

export class AxiosConnection implements Connection {
  private axios!: AxiosInstance;

  connect(baseUrl: string): void {
    this.axios = axios.create({
      baseURL: baseUrl,
    });
  }

  async get<T>(route: string): Promise<T> {
    const response = await this.axios.get(route);
    return response.data;
  }

  async post<T>(route: string, query: any, options: any): Promise<T> {
    const body = {
      query: query || {},
      options: options || {},
    };

    const response = await this.axios.post(route, body);

    return response.data.docs;
  }
}
