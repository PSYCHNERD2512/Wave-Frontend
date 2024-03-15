import styles from "./ProfileTextContent.module.css";

export const ProfileTextContent = ({ heading, content }) => {
  return (
    <div className={styles.container}>
      <h2>{heading}</h2>
      <p>{content}</p>
    </div>
  );
};
