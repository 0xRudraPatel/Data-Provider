import Head from "next/head";
import styles from "../styles/about.module.css";

const About = () => {
  return (
    <>
      <Head>
        <title>Data Hub | About</title>
      </Head>
      <div>
        <h1 className={styles.title}>About</h1>
        <p className={styles.text}>
          This application is built with the reference to the YouTube video from
          channel <b>The Net Ninja</b>, link is given Home Page. So, if you find
          word {" Ninja "} anywhere in the application, it refers to the person
          who we call Ninja.
        </p>
      </div>
    </>
  );
};

export default About;
