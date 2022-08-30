import { LaunchesRepository } from "./../domain/repositories/LaunchesRepository";

export class GetUpcomingLaunches {
  constructor(
    private launchesRepository: Pick<LaunchesRepository, "upcomingLaunches">
  ) {}

  async execute() {
    const upcommingsLaunch = await this.launchesRepository.upcomingLaunches();
    return upcommingsLaunch;
  }
}
