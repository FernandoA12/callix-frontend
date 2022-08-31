import { Header } from "../components/Header";
import { LaunchCard } from "../components/LaunchCard";
import { api } from "../services/api";
import { Launch } from "../entities/Launch";
import { useLaunch } from "../hooks/useLaunch";
import { useEffect } from "react";
import { LaunchList } from "../components/LaunchList";

interface HomeProps {
  launches: Launch[];
}

export default function Home(props: HomeProps) {
  const { setLaunches } = useLaunch();

  useEffect(() => {
    setLaunches(props.launches);
  }, [props]);

  return (
    <main className="flex flex-col gap-4 w-full min-h-screen bg-primary p-5">
      <Header />
      <LaunchCard />
      <LaunchList />
    </main>
  );
}

export async function getServerSideProps() {
  const response = await api.get("/launches/history").catch((err) => {
    console.log(err);
    return {
      data: {},
    };
  });
  
  return {
    props: {
      launches: response.data,
    },
  };
}
