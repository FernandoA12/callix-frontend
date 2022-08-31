import create from "zustand";
import { Launch } from "../entities/Launch";


interface useLaunchProps {
  launch: Launch;
  launches: Launch[];
  setLaunch: (launch: Launch) => void;
  setLaunches: (launches: Launch[]) => void;
  clearLaunch: () => void;
}

const INITIAL_LAUNCH: Launch = {
  date: "2022-08-31T05:40:00.000Z",
  details: "Launch Details",
  name: "Launch Name",
  rocket: {
    name: "Rocket Name",
    description: "Rocket Description",
    thumbnails: [
      "https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg",
    ],
    type: "Rocket",
  },
  thumbnail: [
    "https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg",
  ],
  id: "1",
  upcoming: false
};

export const useLaunch = create<useLaunchProps>((set, get) => ({
  launches: [],
  launch: INITIAL_LAUNCH,
  clearLaunch: () => set({ launch: INITIAL_LAUNCH }),
  setLaunch: (launch) => set({ launch }),
  setLaunches: (newLaunches) => {
    set({ launches: newLaunches, launch: newLaunches.filter(launch => launch.upcoming).at(0) || INITIAL_LAUNCH });
  },
}));
