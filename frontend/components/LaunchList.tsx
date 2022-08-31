import { useLaunch } from "../hooks/useLaunch";
import { format, parseISO } from "date-fns";
import { useEffect } from "react";


export function LaunchList() {
  const { launches, launch: launchChoose, setLaunch } = useLaunch();

  useEffect(() => {
    const cardChoose = document.getElementById("on") 

    if(cardChoose) {
      cardChoose.scrollIntoView({
        behavior: 'smooth',
        block: 'end'
      })
    }

  }, [launchChoose])

  return (
    <ul className="flex overflow-x-auto overflow-y-hidden py-5 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-primary gap-4 snap-x snap-mandatory">
        {launches.map((launch) => (
            <div
              id={launchChoose.id === launch.id ? "on" : "off"}
              aria-disabled={launch.upcoming}
              key={launch.id}
              onClick={() => {
                setLaunch(launch);
              }}
              className="grid cursor-pointer snap-center h-44 gap-4 justify-center select-none p-3 items-center auto-rows-min rounded-md hover:scale-105 hover:duration-300 scale-100 duration-300 bg-zinc-800"
            >
              <div className="w-20 h-20 flex justify-center items-center">
                <img
                  src={launch.thumbnail[1] || launch.rocket.thumbnails[0]}
                  alt=""
                  className="w-full rounded-md"
                />
              </div>
              <div className="grid">
                <span className="text-secondary truncate text-lg whitespace-nowrap">
                  {launch.name}
                </span>
                <span className="text-secondary truncate text-lg whitespace-nowrap">
                  {launch.details}
                </span>
                <span className="text-secondary font-light text-xs opacity-70">
                  {format(parseISO(launch.date), "dd/MM/yyyy")}
                </span>
              </div>
            </div>
          ))}
      </ul>
  )
}