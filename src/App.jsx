import { useState } from 'react'
import './App.css'
import logos from './assets/logo_wave.png'
import home from './assets/home.png'
import profile from './assets/profile.png'
import setting from './assets/setting.png'
import avtar from './assets/Avatar.png'
function Wave() {
  
  return(<>
    <Header/>
    <div id="content">
      <div id="sideBar"> 
        <div id="sideupper">
          <div id="home">        
            <Navigation_icons logo={home} name="  Home"/>
          </div>
            <Navigation_icons logo={profile} name="  Profile"/>
            <Navigation_icons logo={setting} name="  Settings"/>          
        </div>
        <hr />
        <div className='connections'>
          My Connections
          <div id="myconnec">64</div>
        </div>
        <div id="sidelower">
          <Avtars name="Tanishq" connectionsNum={69}/>
          <Avtars name="Tanishq" connectionsNum={69}/>
          <Avtars name="Tanishq" connectionsNum={69}/>
          <Avtars name="Tanishq" connectionsNum={69}/>
          <Avtars name="Tanishq" connectionsNum={69}/>
        </div>
        <div id="seeall">See All</div>
      </div>
      <div id="right">
      </div>
    </div>
    </>
    );
}

function Header(){
  return(
    <div className = "Header">
      
      <div id="head">
        <img id="logo" src={logos}/>
        <div id="WAVE">Wave</div>
      </div>
    
    </div>
  );
}

function Navigation_icons({logo,name}) {
  return(
    <div className="nav">
      <img src={logo} alt="" />{name}
    </div>
  );
}
function Avtars({name,connectionsNum}){
  return(
    <div className='profile'>
      <img src={avtar} alt="" />
      <div id="details">
        <div className='name'>{name}</div>
        <div >{connectionsNum}M connections</div>
      </div>
    </div>
  );
}



export default Wave
