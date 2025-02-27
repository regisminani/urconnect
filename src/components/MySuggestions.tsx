import useMySuggestions from "../hooks/useMySuggestions";
import Suggestion from "./Suggestion";
import SuggestionAlt from "./SuggestionAlt";

const MySuggestions = () => {
  let { loading, error, suggestions } = useMySuggestions();
  return (
    <div>
      <p className="font-medium text-lg mb-10">My suggestions</p>
      {error && <p className="text-sm text-red-500">{error}</p>}
      {loading &&
        Array(5)
          .fill("")
          .map((_) => (
            <div className="bg-neutral-200 animate-pulse rounded-xl w-full h-44 mb-5" />
          ))}
      {suggestions.map((s) => (
        <Suggestion
          key={s._id}
          _id={s._id}
          content={s.content}
          tags={s.tags}
          views={s.views}
          by={s.by}
          votes={s.votes}
          status={s.status}
          comments={s.comments}
          replies={s.replies}
          reports={s.reports}
          createdAt={s.createdAt}
        />
      ))}
      <SuggestionAlt ms />
    </div>
  );
};

export default MySuggestions;
