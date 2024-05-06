

import Image from "next/image";
import styles from "./page.module.css";

import DashboardNav from "@components/dashboardNav";

export default function Home() {

  return (
    <>
      <DashboardNav/>

      <section className={styles.mainContainer}>
        Hello
      </section>
    </>
  )

}