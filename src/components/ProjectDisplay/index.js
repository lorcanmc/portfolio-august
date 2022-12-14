import React from "react";
import styles from "./ProjectDisplay.module.css";

export default function ProjectDisplay() {
  return (
    <div className={styles.ProjectSection}>
      <h1>My Projects</h1>
      <div className={styles.ProjectDisplay}>
        <div className={styles.projectColumn}>
          <button
            className={styles.button}
            onClick={() => {
              window.open("https://animle.netlify.app/", "_blank");
            }}
          >
            <img
              className={styles.gif}
              src="/videos/animle.gif"
              alt="alotify"
            />
            <div className={styles.hoverGraphic}>
              <h2>Animle</h2>
            </div>
            <button
              onClick={() => {
                window.open("https://github.com/lorcanmc/WordleIdea", "_blank");
              }}
              className={styles.githubLogo}
            >
              <img className={styles.githubLogoImage} width="20px" src="./images/github.png" alt="github logo"/>
            </button>
          </button>
        </div>
        <div className={styles.projectColumn}>
          <button
            className={styles.button}
            onClick={() => {
              window.open("https://alotify-app.netlify.app/", "_blank");
            }}
          >
            <img
              className={styles.gif}
              src="/videos/alotify.gif"
              alt="alotify"
            />
            <div className={styles.hoverGraphic}>
              <h2>Alotify</h2>
            </div>
            <button
              onClick={() => {
                window.open("https://github.com/lorcanmc/SpotifyItunesClone", "_blank");
              }}
              className={styles.githubLogo}
            >
              <img className={styles.githubLogoImage} width="20px" src="./images/github.png"  alt="github logo" />
            </button>
          </button>
        </div>
      </div>
    </div>
  );
}
