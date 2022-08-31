import { Launch } from "../../domain/entities/Launch";
import { Connection } from "../api/Connection";
import { LaunchesRepository } from "./../../domain/repositories/LaunchesRepository";
import { DateFormatter } from "../utils/DateFormatter";

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
  id: string;
  upcoming: boolean;
}

export class LaunchesRepositoryAPI implements LaunchesRepository {

  constructor(private readonly connection: Connection, private readonly dateFormatter: DateFormatter) {
    this.connection.connect("https://api.spacexdata.com/");
  }

  async getLaunches(): Promise<Launch[]> {
    const responses = await this.connection.post<ResponseAPI[]>(
      "/v5/launches/query",
      {
        date_utc: {
          $gte: this.dateFormatter.formatDate(this.dateFormatter.subMounths(new Date().toISOString(), 2))
        }
      },
      {
        populate: ["rocket"],
        sort: {
          date_utc: 1,
        },
        limit: 100
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
          id: response.id,
          upcoming: response.upcoming
        })
    );
  }
}
