import { useNavigate } from "react-router";
import type { Result } from "../types";

const ResultCard = ({ result }: { result: Result }) => {
  const navigate = useNavigate();
  return (
    <div
      key={result.title}
      className="cursor-pointer"
      onClick={() => navigate(`/links/${result.title.replaceAll(" ", "-")}`)}
    >
      <h3 className="text-blue-500 visited:text-violet-600 font-semibold">
        {result.title}
      </h3>
      <span className="line-clamp-2 font-medium">{result.description}</span>
    </div>
  );
};

export default ResultCard;
