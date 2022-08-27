import React from "react";
import styles from "./NameBox.module.css";

export default function NameBox() {
  return (
    <div className={styles.NameBox}>
      <div className={styles.container}>
        <div className={styles.letter}>
          <div className={`${styles.left} ${styles.letterColor}`}></div>
          <div className={`${styles.bottom} ${styles.letterColor}`}></div>
        </div>
        <div className={styles.letter}>
          <div className={`${styles.left} ${styles.letterColor}`}></div>
          <div className={`${styles.bottom} ${styles.letterColor}`}></div>
          <div className={`${styles.top} ${styles.letterColor}`}></div>
          <div className={`${styles.right} ${styles.letterColor}`}></div>
        </div>
        <div className={styles.letter}>
          <div className={`${styles.left} ${styles.letterColor}`}></div>
          <div className={`${styles.top} ${styles.letterColor}`}></div>
        </div>
        <div className={styles.letter}>
          <div className={`${styles.left} ${styles.letterColor}`}></div>
          <div className={`${styles.bottom} ${styles.letterColor}`}></div>
          <div className={`${styles.top} ${styles.letterColor}`}></div>
        </div>
        <div className={styles.letter}>
          <div className={`${styles.top} ${styles.letterColor}`}></div>
          <div className={`${styles.left} ${styles.letterColor}`}></div>
          <div className={`${styles.right} ${styles.letterColor}`}></div>
          <div className={`${styles.middle} ${styles.letterColor}`}></div>
        </div>
        <div className={styles.letter}>
          <div className={`${styles.left} ${styles.letterColor}`}></div>
          <div className={`${styles.top} ${styles.letterColor}`}></div>
          <div className={`${styles.right} ${styles.letterColor}`}></div>
        </div>
        <div>
            <h3 className={styles.sideways}>Mccullagh</h3>
        </div>
      </div>
    </div>
  );
}
