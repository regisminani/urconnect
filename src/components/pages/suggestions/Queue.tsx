import fetchUser from "../../../hooks/fetchUser";
import useSuggestions from "../../../hooks/useSuggestions";
import Suggestion from "../../Suggestion";
import SuggestionAlt from "../../SuggestionAlt";
import SuggestionInput from "../../SuggestionInput";

const Queue = () => {
  let { loading, error, suggestions } = useSuggestions("queue");
  const {user} = fetchUser()
  console.log(suggestions);
  return (
    <div className="space-y-5">
      <SuggestionInput username={user.username}/>
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
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
      <SuggestionAlt />
    </div>
  );
};

export default Queue;
