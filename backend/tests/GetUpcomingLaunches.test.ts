import { GetUpcomingLaunches } from "./../application/GetUpcomingLaunches";
import { Launch } from "../domain/entities/Launch";
import { LaunchesRepository } from "../domain/repositories/LaunchesRepository";

it("Should get the upcomings rocket`s launches", async () => {
  const launchesRepository: Pick<LaunchesRepository, "upcomingLaunches"> = {
    upcomingLaunches: jest.fn(async () => [
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
  const getUpcomingLaunches = new GetUpcomingLaunches(launchesRepository);
  const upcommingLaunches = await getUpcomingLaunches.execute();
  expect(upcommingLaunches[0].name).toBe("any");
  expect(launchesRepository.upcomingLaunches).toBeCalled();
});
