export interface Connection {
  connect(baseUrl: string): void;
  get<T>(route: string): Promise<T>;
  post<T>(route: string, query?: any, options?: any): Promise<T>;
}
