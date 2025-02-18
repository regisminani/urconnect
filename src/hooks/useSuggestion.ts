import { useEffect, useState } from "react";
import { defaultSuggestion, Suggestion } from "../types";
import { io } from "socket.io-client";

const useSuggestion = (suggestionQuery?:string) => {
    const socket = io("https://ur-connect.onrender.com/suggestions");
    socket.emit("singlePost", suggestionQuery);
    const [suggestion, setSuggestion] = useState<Suggestion>(defaultSuggestion);
      const [error, setError] = useState("");
      const [loading, setLoading] = useState(false);
     
  useEffect(() => { 
    setLoading(true);
    socket.on("singlePost", function (msg: Suggestion) {
      setSuggestion(msg)
      if(!msg) setError("No suggestion")
        setLoading(false)
      }
    );
  }, []);
  return { suggestion, error, loading, setSuggestion, setError }
}

export default useSuggestion;