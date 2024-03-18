import './Wave.css'
import logos from './assets/logo_wave.png'
import home from './assets/home.png'
import profile from './assets/profile.png'
import setting from './assets/setting.png'
import avtar from './assets/Avatar.png'
import search from './assets/Search.png'
import DP from './assets/profile.jpeg'
import waving_hand from './assets/Waving_hand.png'
import srk from './assets/srk.jpg'
import rashmika  from './assets/rashmika.jpg'
import kartik from './assets/kartik.png'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { Outlet, Link } from "react-router-dom";


function Wave() {

  const [profiles,update]= useState([])
  useEffect(()=>{
    async function getaprofiles(){
      try{
        const profileslist=await axios.get('http://127.0.0.1:8000/profiles/')
        console.log(profileslist.data.profiles)
        update(profileslist.data.profiles)
      }
      catch(err){
        console.log(err)
      }
    }
    getaprofiles()
  },[])


const list = [
  {"name": "Gender","list":["Female","Male"]},
  {"name": "Age","list":["17 & below","17-20","20-34","24-30","30 & above"]},
  {"name":"Clubs","list":["Tech","Robotics","Culturals","Finance","Photography/Filmography"]},
  {"name":"interests","list":["Music","Literature & Poetry","Sports","Cultural","Research/Acads","Entrepreneurship"]},
  {"name":"Social Preferences","list":["Travel Enthusiasts","Wellness & Fitness","Study buddy","Tech Enthusiasts","Social Events","Music & Arts","Foodie"]} 
]
  return(<div id="WEBPAGE">
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
          <div id="myconnec">64</div><br />
        </div>
        <div id="sidelower">
          <Avtars name="Tanishq" connectionsNum={69} purpose="just"/>
          <Avtars name="Tanishq" connectionsNum={69} purpose="just"/>
          <Avtars name="Tanishq" connectionsNum={69} purpose="just"/>
          <Avtars name="Tanishq" connectionsNum={69} purpose="just"/>
          <Avtars name="Tanishq" connectionsNum={69} purpose="just"/>
          <Avtars name="Tanishq" connectionsNum={69} purpose="just"/>
          <Avtars name="Tanishq" connectionsNum={69} purpose="just"/>
          <Avtars name="Tanishq" connectionsNum={69} purpose="just"/>
          <Avtars name="Tanishq" connectionsNum={69} purpose="just"/>
          <Avtars name="Tanishq" connectionsNum={69} purpose="just"/>
        
        </div>
        
      </div>
      <div id="right">
        
        <div id="FILTERDIV">
          
          <div id="filterupper">
            <span id="Filters">Filters</span>
            <div id="searchdiv">
              <input type="text"  className="textinput" placeholder='search names,hobbies and more'/>
              <div id="search">
                <a href=""><img src={search} alt="" /></a>
              </div>
            </div>
             <span className='name'>Clear All</span>
          </div>
          <div id="filterlower">
           {list.map((head,index) => (
           <div key={index}>
            <div  className='category'>{head.name}</div>
            <ul className='subcategory'>
              {head.list.map((option,index2) =>(<li key={index2} ><input type="checkbox" />{option}</li>))}
            </ul>           
           </div>))
           }

          </div>
        </div>



        <div id="main">
        {
          profiles.map((person,index3)=>(
             
            <FlashCard  key={person.id} img={kartik} data={person} name={person.name} AboutMe="hii" Interests={person.interests.split(', ')} id={person.id} />
          
            ))
        } 
        </div>



        <div id="sent">
          <span className='span'>Waves sent</span>
          <div className='peoples'>
          <Avtars name="Tanishq" connectionsNum={69} purpose="sent"/>
          <Avtars name="Tanishq" connectionsNum={69} purpose="sent"/>
          <Avtars name="Tanishq" connectionsNum={69} purpose="sent"/>
          <Avtars name="Tanishq" connectionsNum={69} purpose="sent"/>
          <Avtars name="Tanishq" connectionsNum={69} purpose="sent"/>
          <Avtars name="Tanishq" connectionsNum={69} purpose="sent"/>
          <Avtars name="Tanishq" connectionsNum={69} purpose="sent"/>
          <Avtars name="Tanishq" connectionsNum={69} purpose="sent"/>
          <Avtars name="Tanishq" connectionsNum={69} purpose="sent"/>
          <Avtars name="Tanishq" connectionsNum={69} purpose="sent"/>
        </div>
        </div>         
        <div id="receive">
          <span className='span'>Waves Received</span>
          <div className='peoples'>
            <Avtars name="Tanishq" connectionsNum={69} purpose="Received"/>
            <Avtars name="Tanishq" connectionsNum={69} purpose="Received"/>
            <Avtars name="Tanishq" connectionsNum={69} purpose="Received"/>
            <Avtars name="Tanishq" connectionsNum={69} purpose="Received"/>
            <Avtars name="Tanishq" connectionsNum={69} purpose="Received"/>
            <Avtars name="Tanishq" connectionsNum={69} purpose="Received"/>
            <Avtars name="Tanishq" connectionsNum={69} purpose="Received"/>
            <Avtars name="Tanishq" connectionsNum={69} purpose="Received"/>
            <Avtars name="Tanishq" connectionsNum={69} purpose="Received"/>
            <Avtars name="Tanishq" connectionsNum={69} purpose="Received"/>
          </div>
        </div>
      </div>
    </div>
    </div>
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
    <div className="nav" >
      <img src={logo} alt="" /><div className='name'>{name}</div>
    </div>
  );
}
function Purposee({purpose}){
    if(purpose==="just")return;
    else if(purpose==="sent"){
      return(<div className='pinkbutton'>sent</div>);
    }
    else{
      return(<div className='pinkbutton'>Requested</div>);
    }
  }

function Avtars({name,connectionsNum,purpose}){
  return(
    <div className='profile'>
      <img src={avtar} alt="" />
      <div id="details">
        <div className='name'>{name}</div>
        <div id="connections" >{connectionsNum}M connections</div>
      </div>
      <Purposee purpose={purpose}/>
    </div>
  );
}

function FlashCard({img,name,AboutMe,Interests,id,data}){
  
  return(
    
    <div id="card" ><Link id="link" to={{pathname:`profile/${id}`,
    state:{data}}}>
      <img src={img} alt="profile" id="profilephoto"/><br />
      
      <div id="info">
        <div id="flashcardname"><strong>{name}</strong></div>
        <strong>About Me</strong>
       <div id="AboutMe">{AboutMe}</div> 
       <br />
       <strong>Interests </strong><br/>
       {Interests.map((interest,index3) =>(<div id="interest" key={index3}>{interest}</div>))}
        
          <button id="sendwave" onClick={(e)=>{
            e.preventDefault();
            // e.stopPropagation();
            alert("done")
          }}>Send Wave</button>
          <img id="wave" src={waving_hand} alt="" />
        
      </div></Link>
    </div>
     
  );

}


export default Wave 
