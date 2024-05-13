

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
                <Image src="/images/mtn.svg" width={50} height={50}/>
            </div>
            <div className={styles.profileContent}>
                <div className={styles.purchaseDetails}>
                  <div className={styles.profileDetails}>
                    <p className={styles.detailMain}>Description:</p>
                    <p className={styles.detailContent}>Data purchase</p>
                  </div>
                  <div className={styles.profileDetails}>
                    <p className={styles.detailMain}>To:</p>
                    <p className={styles.detailContent}>081710212455</p>
                  </div>
                  <div className={styles.profileDetails}>
                    <p className={styles.detailMain}>Network:</p>
                    <p className={styles.detailContent}>MTN-NG</p>
                  </div>
                  <div className={styles.profileDetails}>
                    <p className={styles.detailMain}>Charges:</p>
                    <p className={styles.detailContent}>₦0.00</p>
                  </div>
                  <div className={styles.profileDetails}>
                    <p className={styles.detailMain}>Bundle:</p>
                    <p className={styles.detailContent}>1GB 7Days ₦600 </p>
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