import { LaunchesRepository } from "./../domain/repositories/LaunchesRepository";

export class GetLaunches {
  constructor(
    private launchesRepository: Pick<LaunchesRepository, "getLaunches">
  ) {}

  async execute() {
    const launches = await this.launchesRepository.getLaunches();
    return launches;
  }
}
