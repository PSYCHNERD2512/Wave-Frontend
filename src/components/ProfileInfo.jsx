import styles from "./ProfileInfo.module.css";

export const ProfileInfo = ({ icon, text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icon}</div>
      <span className={styles.text}>{text}</span>
    </div>
  );
};
