import { useLaunch } from "../hooks/useLaunch";
import { parseISO, format } from "date-fns";

export function LaunchCard() {
  const { launch } = useLaunch();

  return (
    <div className="w-full grid auto-rows-min sm:grid-cols-2 lg:gap-6 gap-4 flex-1">
      <div className="flex justify-end sm:col-start-2 lg:absolute lg:right-0 lg:w-full lg:pr-[100px] lg:!max-h-10">
        <div className="w-full sm:max-w-xs md:max-w-md">
          <img src={launch.thumbnail[0] || launch.rocket.thumbnails[0]} alt={launch.rocket.name} className="w-full rounded-md" />
        </div>
      </div>
      <div className="lg:mt-10 grid gap-4">
        <header>
          <h1 className="text-secondary font-semibold uppercase text-3xl xl:text-5xl">
            {launch.name}
          </h1>
          <p className="text-secondary font-light">{launch.details}</p>
          <span className="text-secondary font-light text-sm opacity-70 xl:text-xl">
            {format(parseISO(launch.date), "dd/MM/yyyy")}
          </span>
        </header>
        <div className="grid">
          <span className="text-secondary text-xl xl:text-3xl">{launch.rocket.name}</span>
          <span className="text-secondary font-light xl:text-2xl">
            {launch.rocket.description}
          </span>
        </div>
      </div>
    </div>
  );
}
