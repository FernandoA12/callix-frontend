import { Launch } from "../entities/Launch";

export interface LaunchesRepository {
  nextLauch(): Promise<Launch>;
  pastLauch(): Promise<Launch>;
  upcomingLaunches(): Promise<Launch[]>;
  latestLaunches(): Promise<Launch[]>;
}
