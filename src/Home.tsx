import { Outlet, useSearchParams } from "react-router";
import Features from "./components/Features";
import Results from "./components/Results";
import SearchBar from "./components/SearchBar";
import { useEffect } from "react";
import { initVectorDB } from "./db";

const Home = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  useEffect(() => {
    const initializeDB = async () => {
      await initVectorDB();
    };
    initializeDB();
  }, [initVectorDB]);

  return (
    <div className="flex flex-col gap-4">
      <SearchBar />
      {query ? <Results /> : <Features />}
    </div>
  );
};

export default Home;
