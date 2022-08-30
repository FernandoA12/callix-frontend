import { GetUpcomingsLaunch } from "./../application/GetUpcomingsLaunch";
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
  const getUpcomingsLaunch = new GetUpcomingsLaunch(launchesRepository);
  const upcomingsLaunch = await getUpcomingsLaunch.execute();
  expect(upcomingsLaunch[0].name).toBe("any");
  expect(launchesRepository.upcomingLaunches).toBeCalled();
});
