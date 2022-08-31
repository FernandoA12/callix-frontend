import { GetLaunches } from "./../../application/GetLaunches";
import { HttpServer } from "../http/Http";
import { LaunchesRepository } from "./../../domain/repositories/LaunchesRepository";

export class LaunchesController {
  constructor(
    readonly server: HttpServer,
    readonly launchesRepository: LaunchesRepository
  ) {
    server.on("get", "/launches/history", async (req, res) => {
      try {
        const getLaunches = new GetLaunches(launchesRepository);
        const launches = await getLaunches.execute();

        res.status(200).json(launches);
      } catch (err) {
        console.log(err);
        res.status(400).send("Could not find any launches");
      }
    });
  }
}
