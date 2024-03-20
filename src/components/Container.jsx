import logos from "../assets/logo_wave.png";
import home from "../assets/home.png";
import profile from "../assets/profile.png";
import setting from "../assets/setting.png";
import { Link } from "react-router-dom";

export default function Container({ children, user }) {
  return (
    <div id="WEBPAGE">
      <Header />
      <div id="content">
        <div id="sideBar">
          <div id="sideupper">
            <div id="home">
              <Navigation_icons logo={home} name="  Home" />
            </div>
            <Link id="link" to={{ pathname: `/profiles/${user.username}` }}>
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
              : "TODO :)"}
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
        <img id="logo" src={logos} />
        <div id="WAVE">Wave</div>
      </div>
    </div>
  );
}

function Navigation_icons({ logo, name }) {
  return (
    <div className="nav">
      <img src={logo} alt="" />
      <div className="name">{name}</div>
    </div>
  );
}
