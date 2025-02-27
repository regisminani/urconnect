import useSuggestions from "../../../hooks/useSuggestions";
import Suggestion from "../../Suggestion";
import SuggestionAlt from "../../SuggestionAlt";

const Pending = () => {
  let { loading, error, suggestions } = useSuggestions("pending");
  return (
    <div className="space-y-5">
      {error && <p>{error}</p>}
      {loading && Array(5).fill('').map((_)=>
      <div className="bg-neutral-200 animate-pulse rounded-xl w-full h-44"/>
      )
      }
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
      <SuggestionAlt/>
    </div>
  );
};

export default Pending;
