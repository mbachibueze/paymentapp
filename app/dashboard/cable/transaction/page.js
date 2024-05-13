

import Image from "next/image";
import styles from "./page.module.css"


import { FaNairaSign } from "react-icons/fa6";

import DashboardNav from "@components/dashboardNav";
import Sample from "@components/sample";


export default function Home(){


  return(

    <>
      <DashboardNav/>

      <Sample>
      <div className={styles.popUpHeader}>
          <p className={styles.header}><span>Confirm Transaction</span>
          <span className={styles.close}>
            <Image src="/images/close.svg" width={24} height={24}/>
          </span>
          </p>
        </div>
      <section className={styles.mainContainer}>
        <div className={styles.container}>
          <div className={styles.profile}>
            <div className={styles.profileImg}>
                <Image src="/images/dstv.svg" width={50} height={50}/>
            </div>
            <div className={styles.profileContent}>
                <div className={styles.purchaseDetails}>
                  <div className={styles.profileDetails}>
                    <p className={styles.detailMain}>Description:</p>
                    <p className={styles.detailContent}>Cable Tv payment</p>
                  </div>
                  <div className={styles.profileDetails}>
                    <p className={styles.detailMain}>Account name:</p>
                    <p className={styles.detailContent}>Mr Angelo Chris</p>
                  </div>
                  <div className={styles.profileDetails}>
                    <p className={styles.detailMain}>Smartcard Number:</p>
                    <p className={styles.detailContent}>3023764582</p>
                  </div>
                  <div className={styles.profileDetails}>
                    <p className={styles.detailMain}>Charges:</p>
                    <p className={styles.detailContent}>₦0.00</p>
                  </div>
                  <div className={styles.profileDetails}>
                    <p className={styles.detailMain}>Bouquet:</p>
                    <p className={styles.detailContent}>Yanga/month ₦4200 </p>
                  </div>
                </div>
            </div>
            <div className={styles.pinContainer}>
              <p className={styles.pinHeader}>Enter Transaction PIN</p>
              <div className={styles.pinsCol}>
                <span className={styles.pin}></span>
                <span className={styles.pin}></span>
                <span className={styles.pin}></span>
                <span className={styles.pin}></span>
              </div>
            </div>
            <div className={styles.saveBtn}>
              Go back Home
            </div>
          </div>
        </div>
      </section>
      </Sample>
    </>
  )
}