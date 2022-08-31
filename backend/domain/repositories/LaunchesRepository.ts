import { Launch } from "../entities/Launch";

export interface LaunchesRepository {
  getLaunches(): Promise<Launch[]>;
}
