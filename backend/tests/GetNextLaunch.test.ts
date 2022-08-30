import { GetNextLaunch } from "./../application/GetNextLaunch";
import { Launch } from "../domain/entities/Launch";
import { LaunchesRepository } from "../domain/repositories/LaunchesRepository";

it("Should get the next rocket`s launch", async () => {
  const launchesRepository: Pick<LaunchesRepository, "nextLaunch"> = {
    nextLaunch: jest.fn(
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
  const getNextLaunch = new GetNextLaunch(launchesRepository);
  const nextLaunch = await getNextLaunch.execute();
  expect(nextLaunch.name).toBe("any");
  expect(launchesRepository.nextLaunch).toBeCalled();
});
