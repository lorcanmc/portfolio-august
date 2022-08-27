import React from "react";
import styles from "./ProjectDisplay.module.css";
export default function ProjectDisplay() {
  return (
    <div className={styles.ProjectSection}>
      <h1>My Projects</h1>
      <div className={styles.ProjectDisplay}>
        <button
          className={styles.button}
          onClick={() => {
            window.open("https://animle.netlify.app/", "_blank");
          }}
        >
          <video
            width="100%"
            onMouseOver={(e) => e.target.play()}
            src="videos/animle.mp4"
          />
          <div className={styles.hoverGraphic}>
            <h2>Animle</h2>
            <p>text</p>
          </div>
        </button>
      </div>
    </div>
  );
}
