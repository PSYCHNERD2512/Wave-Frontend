import { useParams } from "react-router-dom";
import { ProfileInfo, ProfileTextContent } from "../components";
import {
  CakeIcon,
  EmailIcon,
  LocationIcon,
  UserIcon,
} from "../components/icons";
import styles from "./ProfilePage.module.css";
import { useState,useEffect } from "react";
import axios from 'axios'

export const ProfilePage = () => {
  let {username}=useParams()
  const [detail,upd]= useState({})
  useEffect(()=>{
    async function getdata(){
      try{
        const data=await axios.get(`http://127.0.0.1:8000/profiles/${username}`)
        console.log(data.data)
        upd(data.data)
      }
      catch(err){
        console.log(err)
      }
    }
    getdata()
  },[])

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <img
          src="https://images.unsplash.com/photo-1522543558187-768b6df7c25c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="profile banner"
        />
        <div className={styles.bannerInfo}>
          <div>
            <img
              src={detail.picture}
              alt="profile picture"
              className={styles.profilePicture}
            />
            <span>{detail.name}</span>
          </div>

          <button>Edit Profile</button>
        </div>
      </div>

      <main className={styles.content}>
        <div>
          <aside className={styles.profileInfo}>
            <span>BTech in Mechanical Engg. at IIT Bombay</span>
            <ProfileInfo icon={<UserIcon />} text={detail.gender} />
            <ProfileInfo icon={<CakeIcon />} text="June 26, 1980" />
            <ProfileInfo icon={<EmailIcon />} text={detail.email} />
            <ProfileInfo icon={<LocationIcon />} text={detail.residence} />
          </aside>

          <div>
            <ProfileTextContent
              heading="About Me"
              content={detail.about} 
            />
            <ProfileTextContent
              heading="I'm lookin for..."
              content=""
              />
          </div>
        </div>
      </main>
    </div>
  );
};
