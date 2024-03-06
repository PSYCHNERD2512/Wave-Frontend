import { ProfileInfo, ProfileTextContent } from "../components";
import {
  CakeIcon,
  EmailIcon,
  LocationIcon,
  UserIcon,
} from "../components/icons";
import styles from "./ProfilePage.module.css";

export const ProfilePage = () => {
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
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="profile picture"
              className={styles.profilePicture}
            />
            <span>Geet Sethi</span>
          </div>

          <button>Edit Profile</button>
        </div>
      </div>

      <main className={styles.content}>
        <div>
          <aside className={styles.profileInfo}>
            <span>BTech in Mechanical Engg. at IIT Bombay</span>
            <ProfileInfo icon={<UserIcon />} text="Male" />
            <ProfileInfo icon={<CakeIcon />} text="June 26, 1980" />
            <ProfileInfo icon={<EmailIcon />} text="Abhi1234@gmail.com" />
            <ProfileInfo icon={<LocationIcon />} text="Bandra (W), Mumbai" />
          </aside>

          <div>
            <ProfileTextContent
              heading="About Me"
              content="Hey there! I'm Abhishek, a BTech student studying at IITB. Passionate about Football and movies, I'm always on the lookout for new adventures and meaningful connections with fellow students. Whether it's diving into coding projects, exploring the latest tech trends, or unwinding with a good book, I'm eager to share experiences!!"
            />
            <ProfileTextContent
              heading="I'm lookin for..."
              content="expanding my social circle and meet new friends with whom I can hang out, attend campus events, or explore the local area."
            />
          </div>
        </div>
      </main>
    </div>
  );
};
