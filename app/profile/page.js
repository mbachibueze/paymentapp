

import Image from "next/image";
import styles from "./page.module.css";

import DashboardNav from "@components/dashboardNav";

export default function Home() {

  return (
    <>
      <DashboardNav/>

      <section className={styles.mainContainer}>
        <div className={styles.container}>
          <span className={styles.back}>
            <Image src="/profile/back.svg" width={6.67} height={13.33}/>
            <p>Back</p>
          </span>
          <div className={styles.profile}>
            <h1 className={styles.header}>My Profile</h1>
            <div className={styles.profileImg}>
                <Image src="/profile/profileIcon.svg" width={60} height={60}/>
                <p>Edit profile pic</p>
            </div>
            <div className={styles.profileContent}>
              <div className={styles.profileDetails}>
                <p className={styles.detailMain}>User ID</p>
                <p className={styles.detailContent}>574dgbq743o2cJ</p>
              </div>
            </div>
            <div className={styles.saveBtn}>
              Save changes
            </div>
          </div>
        </div>
      </section>
    </>
  )

}