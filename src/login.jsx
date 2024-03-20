import { useAuth } from './provider/authProvider';
import { useNavigate,Link } from 'react-router-dom';
import { Login_page } from './pages/Login_page';



const Login = () => {
    const { setToken } = useAuth();
    const navigate = useNavigate();
  
    const handleLogin = async(username,password) => {
    try{  
        const response = await fetch('http://127.0.0.1:8000/accounts/login/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
          
        if (!response.ok) {
            throw new Error('Login failed. Please check your credentials.');
        }
        const data=await response.json();
        const token=data.refresh;
       
        // console.log(token)
        setToken(token)
        
        navigate(`/Home/${username}`, { replace: true });
    
    }catch(err){
        alert(err)
    }
    };

    // setTimeout(() => {
    //   handleLogin();
    // }, 30 * 1000);
  
    return <Login_page onLogin={handleLogin} />;
  };
export default Login