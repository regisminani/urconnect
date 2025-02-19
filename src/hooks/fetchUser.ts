import { useEffect, useState } from "react";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { defaultUser, LoggedInUser } from "../types";

const fetchUser = ()=>{
    const [user, setUser] = useState<LoggedInUser>(defaultUser)
     const [error, setError] = useState("");
          const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
          const token = localStorage.getItem("token");
          if (!token) {
            setError("User not logged in");
            return;
          }
          try {
            const decodedToken:JwtPayload = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp !=undefined && decodedToken.exp < currentTime) {
        // Token is expired
        console.log('Token has expired');
        // logout()
      }
            setUser(jwtDecode(token));

            setLoading(false);
          } catch (error) {
            console.error("Error decoding token", error)
            setError(`Error decoding token`);
            setLoading(false);
          }
        }, []);
        return {user,loading, error}
}
const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

export default fetchUser;