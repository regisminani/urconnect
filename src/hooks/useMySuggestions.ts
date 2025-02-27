import { useEffect, useState } from "react";
import { Suggestion } from "../types";
import { getMySuggestions } from "../api";
import { CanceledError } from "axios";

const useMySuggestions = (suggestionQuery?:string)=>{
    const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const { request, cancel } = getMySuggestions(suggestionQuery);
        request
        .then((res) => {
          setSuggestions(res.data);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });
  
     
      return () => cancel();
        }, []);
        return {suggestions,loading, error}
}


export default useMySuggestions;