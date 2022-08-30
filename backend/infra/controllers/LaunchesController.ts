import { GetPastLaunch } from "./../../application/GetPastLaunch";
import { GetUpcomingLaunches } from "./../../application/GetUpcomingLaunches";
import { GetNextLaunch } from "./../../application/GetNextLaunch";
import { GetLatestLaunches } from "./../../application/GetLatestLaunches";
import { HttpServer } from "../http/Http";
import { LaunchesRepository } from "./../../domain/repositories/LaunchesRepository";

export class LaunchesController {
  constructor(
    readonly server: HttpServer,
    readonly launchesRepository: LaunchesRepository
  ) {
    server.on("get", "/launches/history", async (req, res) => {
      try {
        const getLatestLaunches = new GetLatestLaunches(launchesRepository);
        const getUpcomingLaunches = new GetUpcomingLaunches(launchesRepository);
        const getNextLaunch = new GetNextLaunch(launchesRepository);
        const getPastLaunch = new GetPastLaunch(launchesRepository);

        const latestLaunches = await getLatestLaunches.execute();
        const upcomingLaunches = await getUpcomingLaunches.execute();
        const nextLaunch = await getNextLaunch.execute();
        const pastLaunch = await getPastLaunch.execute();

        res.status(200).json({
          latestLaunches,
          upcomingLaunches,
          nextLaunch,
          pastLaunch,
        });
      } catch (err) {
        console.log(err);
        res.status(400).send("Could not find any launches");
      }
    });
  }
}
