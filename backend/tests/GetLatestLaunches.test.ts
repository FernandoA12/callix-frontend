import { GetLatestLaunches } from "./../application/GetLatestLaunches";
import { Launch } from "../domain/entities/Launch";
import { LaunchesRepository } from "../domain/repositories/LaunchesRepository";

it("Should get the latest rocket`s launches", async () => {
  const launchesRepository: Pick<LaunchesRepository, "latestLaunches"> = {
    latestLaunches: jest.fn(async () => [
      new Launch({
        name: "any",
        date: "any",
        details: "any",
        rocket: {
          name: "any",
          description: "any",
          thumbnails: ["any"],
          type: "any",
        },
        thumbnail: "any",
      }),
    ]),
  };
  const getLatestLaunches = new GetLatestLaunches(launchesRepository);
  const latestLaunches = await getLatestLaunches.execute();
  expect(latestLaunches[0].name).toBe("any");
  expect(launchesRepository.latestLaunches).toBeCalled();
});
