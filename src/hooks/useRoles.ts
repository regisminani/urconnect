import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import { getRoles } from "../api";
const useRoles = () => {
    const [roles, setRoles] = useState<string[]>([]);
      const [error, setError] = useState("");
      const [loading, setLoading] = useState(false);
     
  useEffect(() => {
    setLoading(true);
    const { request, cancel } = getRoles();
    request
      .then((res) => {
        setRoles(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

   
    return () => cancel();
  }, []);
  return {roles,  error, loading, setRoles, setError }
}

export default useRoles;