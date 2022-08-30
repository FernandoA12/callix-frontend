export interface Connection {
  get<T>(route: string): Promise<T>;
  post<T>(route: string, query?: any, options?: any): Promise<T>;
}
