import { LaunchesRepository } from "./../domain/repositories/LaunchesRepository";
export class GetNextLaunch {
  constructor(
    private launchesRepository: Pick<LaunchesRepository, "nextLaunch">
  ) {}

  async execute() {
    const nextLaunch = await this.launchesRepository.nextLaunch();
    return nextLaunch;
  }
}
