import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import { getSuggestions, Suggestion} from "../api";
const useSuggestions = (suggestionQuery?:string) => {
    const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
      const [error, setError] = useState("");
      const [loading, setLoading] = useState(false);
     
 // afterRender
  useEffect(() => {
    // get -> promise -> res / err
    setLoading(true);
    const { request, cancel } = getSuggestions(suggestionQuery);
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

    // .then((res) => setUsers(res.data))
    // .catch((err) => setError(err.message));
    return () => cancel();
  }, []);
  return { suggestions, error, loading, setSuggestions, setError }
}

export default useSuggestions;