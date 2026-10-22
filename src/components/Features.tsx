import { useNavigate } from "react-router";
import { dataFormat, subject } from "../constants";

const Features = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div className="bg-white p-4 rounded-(--corner-radius) border-(--clr-border-grey-one) border flex flex-col gap-2">
        <span className="text-sm leading-relaxed">
          <strong>Samanarthi</strong> means "similar word" in Marathi. It uses
          in-browser vector search to surface curated links for niche,
          under-represented, or "unsearchable" topics. When traditional search
          engines and LLMs fail to find poorly documented information
          overshadowed by mainstream results, Samanarthi bridges the gap.
        </span>
        <button
          className="styled-button text-center mt-auto"
          onClick={() => navigate("links")}
        >
          Browse All Available Data
        </button>
      </div>

      <div className="bg-white p-4 rounded-(--corner-radius) border-(--clr-border-grey-one) border flex flex-col gap-2">
        <span className="text-sm leading-relaxed">
          Help us improve the search experience by contributing your own curated
          links. To ensure high quality and prevent the SEO spam and dilution
          common in today's search industry, all submitted data is carefully
          reviewed by a human before being added to the database.
        </span>
        <button
          className="styled-button text-center mt-auto"
          onClick={() =>
            window.open(
              `mailto:prathampatankar1234@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(dataFormat)}`,
            )
          }
        >
          Contribute Data
        </button>
      </div>

      {/* <div className="bg-white p-4 rounded-(--corner-radius) border-(--clr-border-grey-one) border flex flex-col gap-2">
        <span className="text-sm leading-relaxed">
          Samanarthi runs completely serverless in your browser using PGLite and
          pgvector, querying pre-compiled embeddings updated monthly. This keeps
          infrastructure costs at zero. If you find this tool valuable and want
          to support its continued development, donations are always
          appreciated!
        </span>
        <a
          className="styled-button text-center mt-auto"
          href={`mailto:prathampatankar1234@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(dataFormat)}`}
        >
          Donate
        </a>
      </div> */}
    </div>
  );
};

export default Features;
