import { useNavigate } from "react-router";
import ResultCard from "./components/ResultCard";
import data from "./data.json";
import type { Result } from "./types";

const AllLinks = () => {
  const links = data.data as Result[];
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-2">
        <h1 className="text-2xl font-semibold cursor-pointer" onClick={() => navigate("/")}>
          Samanarthi
        </h1>
        <h1 className="text-2xl font-semibold">/ Links</h1>
      </div>
      {links?.map((item) => (
        <ResultCard key={item.title} result={item} />
      ))}
    </div>
  );
};

export default AllLinks;
