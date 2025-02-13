import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import { getSuggestion, Suggestion} from "../api";
import { defaultSuggestion } from "../types";
const useSuggestion = (suggestionQuery?:string) => {
    const [suggestion, setSuggestion] = useState<Suggestion>(defaultSuggestion);
      const [error, setError] = useState("");
      const [loading, setLoading] = useState(false);
     
 // afterRender
  useEffect(() => {
    // get -> promise -> res / err
    setLoading(true);
    const { request, cancel } = getSuggestion(suggestionQuery);
    request
      .then((res) => {
        setSuggestion(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => cancel();
  }, []);
  return { suggestion, error, loading, setSuggestion, setError }
}

export default useSuggestion;