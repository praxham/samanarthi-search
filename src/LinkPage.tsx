import { useNavigate, useParams } from "react-router";
import data from "./data.json";
import LinkPreview from "./components/LinkPreview";

const LinkPage = () => {
  const navigate = useNavigate();
  const { title } = useParams();
  const link = data.data.find(
    (item) => item.title === title?.replaceAll("-", " "),
  );
  if (!link) {
    return <div>No Link Found</div>;
  }
  const capitalize = (str: string) =>
    str ? String(str).slice(0)[0].toUpperCase() + str.slice(0).slice(1) : "";
  const capitalizedTitle = link?.title ? capitalize(link.title) : undefined;
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row justify-between items-center gap-4">
        <div className="flex flex-row flex-wrap gap-2 cursor-pointer">
          <h1 className="text-2xl font-semibold" onClick={() => navigate("/")}>
            Samanarthi
          </h1>
          <h1
            className="text-2xl font-semibold cursor-pointer"
            onClick={() => navigate("/links")}
          >
            / Links
          </h1>
          <h1 className="font-semibold text-2xl">/ {capitalizedTitle}</h1>
        </div>
        <button
          className="text-[0.87rem] font-semibold text-nowrap underline cursor-pointer"
          onClick={() =>
            window.open(
              `mailto:prathampatankar1234@gmail.com?subject=${encodeURIComponent(`Data edit suggestion for ${link?.title} on samanarthi search`)}&body=${encodeURIComponent(JSON.stringify(link))}`,
            )
          }
        >
          Suggest Edit
        </button>
      </div>

      <h2>{link?.description}</h2>
      <div className="flex flex-row flex-wrap gap-2">
        {link?.keywords.map((item, index) => (
          <a
            key={index}
            href={`https://www.google.com/search?q=${encodeURIComponent(item)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-600 px-2 py-1 rounded-lg leading-4 hover:bg-blue-400 hover:text-black transition-colors"
            title="Click to search on google"
          >
            {item}
          </a>
        ))}
      </div>
      <span>match type: {link?.matchType}</span>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {link?.links.map((item, index) => (
          <LinkPreview key={index} url={item} />
        ))}
      </div>
    </div>
  );
};

export default LinkPage;
