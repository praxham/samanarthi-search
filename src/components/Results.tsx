import { filterResults } from "../functions";
import ResultCard from "./ResultCard";
import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const Results = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const [limit, setLimit] = useState(1);

  const { isLoading, error, data } = useQuery({
    queryKey: ["search", query, limit],
    queryFn: () => filterResults(query, limit),
    enabled: !!query,
  });

  if (error) {
    console.error(error);
  }

  return (
    <div className="max-w-150 mr-auto flex flex-col gap-2">
      <h2 className="text-xl">Results:</h2>
      {isLoading && <div>Loading...</div>}

      {data?.map((result) => (
        <ResultCard key={result.title} result={result} />
      ))}

      {!isLoading && Array.isArray(data) && data?.length > 0 && (
        <button
          onClick={() => setLimit((prev) => prev + 1)}
          className="underline w-fit cursor-pointer"
        >
          Load More
        </button>
      )}

      {data?.length === 0 && !!query && !isLoading && (
        <div>No Results Found!</div>
      )}
    </div>
  );
};

export default Results;
