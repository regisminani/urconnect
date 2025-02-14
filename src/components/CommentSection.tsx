import useComments from "../hooks/useComments";
import Commentary from "./Commentary";

const CommentSection = ({ id }: { id: string }) => {
  let { loading, error, comments } = useComments(id);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {comments.map((c) => (
        <Commentary by={c.by} content={c.content} />
      ))}
    </div>
  );
};

export default CommentSection;
