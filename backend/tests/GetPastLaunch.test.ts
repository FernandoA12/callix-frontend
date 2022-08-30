import { GetPastLaunch } from "./../application/GetPastLaunch";
import { Launch } from "../domain/entities/Launch";
import { LaunchesRepository } from "../domain/repositories/LaunchesRepository";

it("Should get the past rocket`s launch", async () => {
  const launchesRepository: Pick<LaunchesRepository, "pastLaunch"> = {
    pastLaunch: jest.fn(
      async () =>
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
        })
    ),
  };
  const getPastLaunch = new GetPastLaunch(launchesRepository);
  const pastLaunch = await getPastLaunch.execute();
  expect(pastLaunch.name).toBe("any");
  expect(launchesRepository.pastLaunch).toBeCalled();
});
