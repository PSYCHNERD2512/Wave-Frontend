import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import beach from "../assets/beach.png";
import Logo from "../assets/logo.png";
import "./LoginPage.css";
import { Link } from "react-router-dom";
export default function Login_page({ onLogin }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate username and password if needed
    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }
    // Call the login function passed from the parent component
    onLogin(username, password);
  };

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username) navigate(`/home/${username}`, { replace: true });
  }, [navigate]);

  return (
    <div id="whole">
      <div id="symbol">
        <img id="logo" src={Logo} />
        <div id="WAVE">Wave</div>
      </div>
      <div id="beach">
        <img src={beach} alt="" />
      </div>
      <div id="login">
        <div id="div">
          <div id="Welcome_back">Welcome back !</div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="Username" className="Label">
              Username
            </label>
            <br />
            <input
              type="text"
              placeholder="Enter Username"
              id="Username"
              className="inputtext"
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <label htmlFor="Password" className="Label">
              Password
            </label>
            <br />
            <input
              type="text"
              placeholder="Enter Your Password"
              className="inputtext"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />

            <button type="submit" id="signUp">
              Sign In
            </button>
          </form>

          <div className="text-between-lines">
            <div className="line"></div>
            or
            <div className="line"></div>
          </div>
          <div id="signin">
            Don&apos;t Have an account?
            <Link id="s" to={{pathname:`/signup`}}>
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
