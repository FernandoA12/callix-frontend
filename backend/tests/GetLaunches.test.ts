import { GetLaunches } from "./../application/GetLaunches";
import { Launch } from "../domain/entities/Launch";
import { LaunchesRepository } from "../domain/repositories/LaunchesRepository";

it("Should get the list rocket`s launches", async () => {
  const launchesRepository: Pick<LaunchesRepository, "getLaunches"> = {
    getLaunches: jest.fn(async () => [
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
        thumbnail: [],
        id: "1",
        upcoming: false
      }),
    ]),
  };
  const getLaunches = new GetLaunches(launchesRepository);
  const launches = await getLaunches.execute();
  expect(launches[0].name).toBe("any");
  expect(launchesRepository.getLaunches).toBeCalled();
});
