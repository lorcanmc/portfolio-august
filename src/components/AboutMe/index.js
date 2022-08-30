import styles from "./AboutMe.module.css";

export default function AboutMe() {
  return (
    <div className={styles.AboutMe}>
      <h1 className={styles.header}>About Me</h1>
      <div className={styles.container}>
        <div className={styles.column1}>
          <img
            className={styles.singingImage}
            src="./images/MeSinging.jfif"
            alt="Me singing"
          />
        </div>
        <div className={styles.column2}>
          <p>
            Hi There! I'm Lorcan. A software developer currently based in
            Birmingham. I've always loved puzzles. Whether it's CodeWars or
            chess or wordle , I enjoy getting stuck into something new and
            exciting.{" "}
          </p>
          <p>
            {" "}
            I'm a software developer who loves to create. Formerly a warehouse
            vehicle driver I made a decision to pursue a passion and become a
            coder. I've learnt a lot through the School of Code, how to
            communicate as a team and how to explore new coding in a fun and
            digestible way
          </p>
        </div>
      </div>
    </div>
  );
}
