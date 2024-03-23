import wavingHandIcon from "../assets/wavingHand.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./FlashCard.module.css";

async function sendWave(send, receiver_id) {
  await axios.post(
    `http://127.0.0.1:8000/waving/send_wave/${send}/${receiver_id}/`
  );
}

export function FlashCard({
  img,
  name,
  AboutMe,
  Interests,
  id,
  data,
  baapuser,
}) {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <img
        src={`data:image/png;base64,${img}`}
        alt="profile picture"
        className={styles.profilePicture}
        onClick={() => navigate(`/profiles/${data.username}`)}
      />

      <div className={styles.content}>
        <span className={styles.name}>{name}</span>
        <section className={styles.section}>
          <span>About Me</span>
          <p>{AboutMe}</p>
        </section>
        <section className={styles.section}>
          <span>Interests</span>
          <br />
          <div className={styles.interests}>
            {Interests.map((interest, index) => (
              <div key={index}>{interest}</div>
            ))}
          </div>
        </section>
        <button
          className={styles.waveBtn}
          onClick={(e) => {
            e.preventDefault();
            sendWave(baapuser.id, id);
            window.location.href = `/home/${baapuser.username}`;            
          }}
        >
          Send Wave
          <img src={wavingHandIcon} alt="wave" />
        </button>
      </div>
    </div>
  );
}
