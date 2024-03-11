import './login.css'
import beach from './assets/beach.png'
import logos from './assets/logo_wave.png'

function Login(){

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
                <form action="">
                    <label htmlFor="Username" className='Label'>Username</label><br />
                    <input type="text" placeholder='Enter Username' id="Username"/>
                    <br />
                    <label htmlFor="Password" className='Label'>Password</label><br />
                    <input type="text" placeholder='Enter Your Password' /><br />

                    <button id="signUp">Signup</button>
                </form>

                <div class="text-between-lines">
                    <div className="line"></div>
                    or
                    <div className="line"></div>
                </div>
                <div id="signin">Have an account? <a href=""> Sign in</a></div>
                
              </div>
            </div>

        </div>
    );
}
export default Login