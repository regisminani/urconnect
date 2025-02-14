import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { CommentShape } from "../types";


const useComments = (commentQuery?:string) => {
  const socket = io("https://ur-connect.onrender.com/suggestions");
  socket.emit("postComments", commentQuery);
    const [comments, setComments] = useState<CommentShape[]>([]);
      const [error, setError] = useState("");
      const [loading, setLoading] = useState(false);
     
  useEffect(() => {
 
    setLoading(true);
    socket.on("postComments", function (msg: CommentShape[]) {
      setComments(msg)
      if(msg.length===0) setError("No Comments")
        setLoading(false)
      }
    );
  }, []);
  return { comments, error, loading, setComments, setError }
}

export default useComments;