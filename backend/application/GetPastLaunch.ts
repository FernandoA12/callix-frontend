import { LaunchesRepository } from "./../domain/repositories/LaunchesRepository";

export class GetPastLaunch {
  constructor(
    private launchesRepository: Pick<LaunchesRepository, "pastLaunch">
  ) {}

  async execute() {
    const pastLaunch = await this.launchesRepository.pastLaunch();
    return pastLaunch;
  }
}
