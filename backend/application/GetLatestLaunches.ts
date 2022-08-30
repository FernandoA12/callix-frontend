import { LaunchesRepository } from "./../domain/repositories/LaunchesRepository";

export class GetLatestLaunches {
  constructor(
    private launchesRepository: Pick<LaunchesRepository, "latestLaunches">
  ) {}

  async execute() {
    const latestLaunches = await this.launchesRepository.latestLaunches();
    return latestLaunches;
  }
}
