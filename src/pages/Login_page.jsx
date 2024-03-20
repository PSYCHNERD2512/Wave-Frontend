import '../login.css'
import beach from '../assets/beach.png'
import logos from '../assets/logo_wave.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
export const Login_page=({onLogin})=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validate username and password if needed
        if (!username || !password) {
          alert('Please enter both username and password.');
          return;
        }
        // Call the login function passed from the parent component
        onLogin(username, password);
      };


    return(
        <div id="whole">
            <div id="symbol">
                <img id="logo" src={logos}/>
                <div id="WAVE">Wave</div>
            </div>
            <div id="beach"><img src={beach} alt="" /></div>
            <div id="login">
              <div id="div">
                <div id="Welcome_back">Welcome back !</div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="Username" className='Label'>Username</label><br />
                    <input type="text" placeholder='Enter Username' id="Username" className='inputtext'onChange={(e) => setUsername(e.target.value)}/>
                    <br />
                    <label htmlFor="Password" className='Label'>Password</label><br />
                    <input type="text" placeholder='Enter Your Password' className='inputtext'  onChange={(e) => setPassword(e.target.value)}   /><br />
                    
                    <button type="submit" id="signUp">Signup</button>
                </form>

                <div className="text-between-lines">
                    <div className="line"></div>
                    or
                    <div className="line"></div>
                </div>
                <div id="signin">Have an account? <a id="s" href=""> Sign in</a></div>
                
              </div>
            </div>

        </div>
    );
}

