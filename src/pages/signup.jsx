import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import beach from "../assets/beach.png";
import Logo from "../assets/logo.png";
import "./signup.css";

export default function Signup(){
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
              <form >
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
    
             
            </div>
          </div>
        </div>
      );
}