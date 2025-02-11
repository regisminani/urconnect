import useSuggestions from "../../../hooks/useSuggestions";
import Suggestion from "../../Suggestion";
import SuggestionAlt from "../../SuggestionAlt";
import SuggestionInput from "../../SuggestionInput";



const Queue = () => {
  const {loading, error, suggestions} = useSuggestions('queue')
  console.log(suggestions)
  return (
    <div className="space-y-5">
      <SuggestionInput />
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
      {suggestions.map(s=>
      
      <Suggestion 
      _id={s._id} 
      content={s.content} 
      tags={s.tags} 
      by={s.by} 
      upvotes={s.upvotes}
      downvotes={s.downvotes}
      status={s.status}
      comments={s.comments}
      reply={s.reply} 
      createdAt={s.createdAt}
      
      />
    )}
    <SuggestionAlt/>
    </div>
  );
};

export default Queue;
