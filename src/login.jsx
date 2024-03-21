import { useAuth } from "./provider/authProvider";
import { useNavigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

const Login = () => {
  const { saveCreds } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (username, password) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/accounts/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed. Please check your credentials.");
      }
      const data = await response.json();
      const token = data.refresh;

      saveCreds(token, username);

      navigate(`/home/${username}`, { replace: true });
    } catch (err) {
      alert(err);
    }
  };

  return <LoginPage onLogin={handleLogin} />;
};
export default Login;
