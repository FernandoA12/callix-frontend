import { Launch } from "../entities/Launch";

export interface LaunchesRepository {
  nextLaunch(): Promise<Launch>;
  pastLaunch(): Promise<Launch>;
  upcomingLaunches(): Promise<Launch[]>;
  latestLaunches(): Promise<Launch[]>;
}
