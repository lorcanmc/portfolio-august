import React from "react";
import styles from "./NameBox.module.css";

export default function NameBox() {
  return (
    <div className={styles.NameBox}>
      <div className={styles.container}>
        <div className={styles.letter}>
          <div className={styles.left}></div>
          <div className={styles.bottom}></div>
        </div>
        <div className={styles.letter}>
          <div className={styles.left}></div>
          <div className={styles.bottom}></div>
          <div className={styles.top}></div>
          <div className={styles.right}></div>
        </div>
        <div className={styles.letter}>
          <div className={styles.left}></div>
          <div className={styles.top}></div>
        </div>
        <div className={styles.letter}>
          <div className={styles.left}></div>
          <div className={styles.bottom}></div>
          <div className={styles.top}></div>
        </div>
        <div className={styles.letter}>
          <div className={styles.top}></div>
          <div className={styles.left}></div>
          <div className={styles.right}></div>
          <div className={styles.middle}></div>
        </div>
        <div className={styles.letter}>
          <div className={styles.left}></div>
          <div className={styles.top}></div>
          <div className={styles.right}></div>
        </div>
        <div>
            <h3 className={styles.sideways}>Mccullagh</h3>
        </div>
      </div>
    </div>
  );
}
