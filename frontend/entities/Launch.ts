interface Rocket {
  name: string;
  type: string;
  description: string;
  thumbnails: string[];
}

export interface Launch {
  name: string;
  details: string;
  thumbnail: string[];
  date: string;
  rocket: Rocket;
  id: string;
  upcoming: boolean;
}
