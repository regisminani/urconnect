import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Suggestion } from "../types";


const useSuggestions = (suggestionQuery?:string) => {
  const socket = io("https://ur-connect.onrender.com/suggestions");
  socket.emit("onStatus", suggestionQuery);
    const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
      const [error, setError] = useState("");
      const [loading, setLoading] = useState(false);
     
  useEffect(() => {
 
    setLoading(true);
    socket.on("onStatus", function (msg: Suggestion[]) {
      setSuggestions(msg)
      if(msg.length===0) setError("No suggestions")
        setLoading(false)
      }
    );
  }, []);
  return { suggestions, error, loading, setSuggestions, setError }
}

export default useSuggestions;