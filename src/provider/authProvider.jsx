import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const AuthContext = createContext();

export async function getAccessToken(token) {
  const res = await axios.post("http://127.0.0.1:8000/login/refresh/", {
    refresh: token,
  })
  const access_token = res.data.access;
  localStorage.setItem('access_token',token);
  axios.defaults.headers.common["Authorization"] = "Bearer " + access_token;
}

const AuthProvider = ({ children }) => {
    // Component content goes here
    const [token, setToken_] = useState(localStorage.getItem("refresh_token"));
    const setToken = (newToken) => {
        setToken_(newToken);
        localStorage.setItem("refresh_token", newToken);
      }; 

      useEffect(() => {
        if (token) {
          getAccessToken(token);
          localStorage.setItem('refresh_token',token);
        } else {
          delete axios.defaults.headers.common["Authorization"];
          localStorage.removeItem('refresh_token')
        }
      }, [token]);

      const contextValue = useMemo(
        () => ({
          token,
          setToken,
        }),
        [token]
      )

      return (
        <AuthContext.Provider value={contextValue}>
          {children}
        </AuthContext.Provider>
      );

  };

  export const useAuth = () => {
    return useContext(AuthContext);
  };
  
  export default AuthProvider;