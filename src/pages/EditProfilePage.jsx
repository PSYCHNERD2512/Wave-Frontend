import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

import { Container } from "../components";
import styles from "./EditProfilePage.module.css";
import axios from "axios";

export default function EditProfile() {
  const { state: user } = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    gender: user.gender,
    email: user.email,
    residence: user.residence,
    about: user.about,
  });

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <Container user={user}>
      <div>
        <div className={styles.banner}>
          <img
            src="https://images.unsplash.com/photo-1522543558187-768b6df7c25c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="profile banner"
          />
          <div className={styles.bannerInfo}>
            <div>
              <img
                src={`data:image/png;base64,${user.picture}`}
                alt="profile picture"
                className={styles.profilePicture}
              />
              <span>{user.name}</span>
            </div>

            <button>Edit Profile</button>
          </div>
        </div>

        <form
          className={styles.content}
          onSubmit={(e) => {
            e.preventDefault();
            (async function () {
              const res = await axios.patch(
                `http://127.0.0.1:8000/profiles/${user.username}/update/`,
                formData
              );
              if (res.status === 200) {
                navigate(`/profiles/${user.username}`);
              }
            })();
          }}
        >
          <div className={styles.formGroup}>
            <label htmlFor="gender">Gender</label>
            <input
              type="text"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={(e) =>
                setFormData((old) => ({ ...old, gender: e.target.value }))
              }
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((old) => ({ ...old, email: e.target.value }))
              }
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="residence">Residence</label>
            <input
              type="text"
              id="residence"
              name="residence"
              value={formData.residence}
              onChange={(e) =>
                setFormData((old) => ({ ...old, residence: e.target.value }))
              }
            />
          </div>
          <div className={styles.formGroup} data-field="about">
            <label htmlFor="about">About</label>
            <textarea
              type="text"
              id="about"
              name="about"
              value={formData.about}
              onChange={(e) =>
                setFormData((old) => ({ ...old, about: e.target.value }))
              }
            />
          </div>
          <div className={styles.submitBtn}>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </Container>
  );
}
