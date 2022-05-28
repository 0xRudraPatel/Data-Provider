import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        {/* <Image src="" width={0} height={0} /> */}
        <title>Data Hub | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>HomePage</h1>
        <p className={styles.text}>
          <em>
            <b>Welcome to Data Hub</b>
          </em>
          , this is a place where you can find all the data you need directly
          from the database. For now, data is fetch from JSON Placeholder.
        </p>
        <p className={styles.text}>
          This is application is built with Next.js. The application tutorial is
          available on{" "}
          <a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw">
            YouTube
          </a>
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Data Listing</a>
        </Link>
      </div>
    </>
  );
}
