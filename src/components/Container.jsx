import Logo from "../assets/logo.png";
import homeIcon from "../assets/home.png";
import profile from "../assets/profile.png";
import setting from "../assets/setting.png";
import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";
import { useEffect ,useState,useMemo} from "react";
import axios from "axios";




export function Container({ children, user,other="other"}) {
  const [allProfiles, setAllProfiles] = useState([]);
  
  useEffect(() => {
    async function getdata() {
      try {
        
        const all_data = await axios.get(`http://127.0.0.1:8000/profiles/`);
        setAllProfiles(all_data.data.profiles);
        
      } catch (err) {
        console.log(err);
      }
      getdata();
    }

    getdata();
  }, []);

  const listofconnections = useMemo(() => {
    if (!user || !user.connections) return [];
    return allProfiles.filter((profile) =>
     user.connections.includes(profile.id)
    );
  }, [user]);
  
  
  return (
    <div id="WEBPAGE">
      <Header />
      <div id="content">
        <div id="sideBar">
          <div id="sideupper">
            <Link id="home" to={`/home/${user.username}`}>
              <Navigation_icons logo={homeIcon} name="  Home" />
            </Link>
            <Link to={`/profiles/${user.username}`}>
              <Navigation_icons logo={profile} name="  Profile" />
            </Link>
            <Navigation_icons logo={setting} name="  Settings" />
          </div>
          <hr />
          <div className="connections">
          {other==="self" ? "My connections": `Their connections`}
            <div id="myconnec">
              {user.connections && user.connections.length}
            </div>
            <br />
          </div>
          <div id="sidelower">
            {user.connections && user.connections.length === 0
              ? "No connections"
              :<>{listofconnections.map((connected,index)=>
              <Avatar 
              name={connected.name}
              img={`data:image/png;base64,${connected.picture}`}
              key={index} 
              connectionsNum={connected.connections && connected.connections.length} 
              purpose="just"/>)} </>
              }
          </div>
        </div>
        <div id="right">{children}</div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="Header">
      <div id="head">
        <img id="logo" src={Logo} />
        <div id="WAVE">Wave</div>
      </div>
    </div>
  );
}

function Navigation_icons({ logo, name }) {
  return (
    <div className="nav">
      <img src={logo} alt="" />
      <p>{name}</p>
    </div>
  );
}
