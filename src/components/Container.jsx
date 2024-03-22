import Logo from "../assets/logo.png";
import homeIcon from "../assets/home.png";
import profile from "../assets/profile.png";
import setting from "../assets/setting.png";
import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";
export function Container({ children, user, listofconnections }) {
  
  

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
            My Connections
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
