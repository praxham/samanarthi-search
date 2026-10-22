import noPreview from "../assets/no-preview.png";

const LinkPreview = ({ url }: { url: string }) => {
  return (
    <div
      className="flex flex-row gap-2 bg-white p-4 rounded-(--corner-radius) cursor-pointer"
      onClick={() => window.open(url)}
    >
      <img
        className="w-20 aspect-square object-contain bg-black rounded-(--corner-radius) p-4"
        src={getFavicon(url) ?? noPreview}
        alt=""
      />
      <div className="flex-1 overflow-hidden">
        <h3 className="text-md text-blue-500 underline line-clamp-3 break-all">
          {url}
        </h3>
      </div>
    </div>
  );
};

const getFavicon = (url: string) => {
  const domain = new URL(url).hostname;
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
};
export default LinkPreview;
