import { Launch } from "../../domain/entities/Launch";
import { Connection } from "../api/Connection";
import { LaunchesRepository } from "./../../domain/repositories/LaunchesRepository";

interface ResponseAPI {
  name: string;
  details: string | null;
  links: {
    patch: {
      small: string;
      large: string;
    };
  };
  date_utc: string;
  rocket: {
    flickr_images: string[];
    name: string;
    type: string;
    description: string;
  };
}

export class LaunchesRepositoryAPI implements LaunchesRepository {
  constructor(private readonly connection: Connection) {
    this.connection.connect("https://api.spacexdata.com/");
  }

  async nextLaunch(): Promise<Launch> {
    const response = await this.connection.post<ResponseAPI>(
      "/v5/launches/query",
      {
        upcoming: true,
      },
      {
        populate: ["rocket"],
        sort: {
          date_utc: 1,
        },
      }
    );
    return new Launch({
      name: response[0].name,
      date: response[0].date_utc,
      details: response[0].details || "",
      rocket: {
        description: response[0].rocket.description,
        name: response[0].rocket.name,
        thumbnails: response[0].rocket.flickr_images,
        type: response[0].rocket.type,
      },
      thumbnail: [response[0].links.patch.small, response[0].links.patch.large],
    });
  }

  async pastLaunch(): Promise<Launch> {
    const response = await this.connection.post<ResponseAPI[]>(
      "/v5/launches/query",
      {
        upcoming: false,
      },
      {
        populate: ["rocket"],
        sort: {
          date_utc: -1,
        },
      }
    );

    return new Launch({
      name: response[0].name,
      date: response[0].date_utc,
      details: response[0].details || "",
      rocket: {
        description: response[0].rocket.description,
        name: response[0].rocket.name,
        thumbnails: response[0].rocket.flickr_images,
        type: response[0].rocket.type,
      },
      thumbnail: [response[0].links.patch.small, response[0].links.patch.large],
    });
  }

  async upcomingLaunches(): Promise<Launch[]> {
    const responses = await this.connection.post<ResponseAPI[]>(
      "/v5/launches/query",
      {
        upcoming: true,
      },
      {
        populate: ["rocket"],
        sort: {
          date_utc: 1,
        },
      }
    );
    return responses.map(
      (response) =>
        new Launch({
          name: response.name,
          date: response.date_utc,
          details: response.details || "",
          rocket: {
            description: response.rocket.description,
            name: response.rocket.name,
            thumbnails: response.rocket.flickr_images,
            type: response.rocket.type,
          },
          thumbnail: [response.links.patch.small, response.links.patch.large],
        })
    );
  }

  async latestLaunches(): Promise<Launch[]> {
    const responses = await this.connection.post<ResponseAPI[]>(
      "/v5/launches/query",
      {
        upcoming: false,
      },
      {
        populate: ["rocket"],
        sort: {
          date_utc: -1,
        },
      }
    );
    return responses.map(
      (response) =>
        new Launch({
          name: response.name,
          date: response.date_utc,
          details: response.details || "",
          rocket: {
            description: response.rocket.description,
            name: response.rocket.name,
            thumbnails: response.rocket.flickr_images,
            type: response.rocket.type,
          },
          thumbnail: [response.links.patch.small, response.links.patch.large],
        })
    );
  }
}
