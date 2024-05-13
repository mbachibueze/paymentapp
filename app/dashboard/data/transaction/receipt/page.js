

import Image from "next/image";
import styles from "./page.module.css";
import { FaNairaSign } from "react-icons/fa6";

import DashboardNav from "@components/dashboardNav";

export default function Home() {

  return (
    <>
      <DashboardNav/>

      <section className={styles.mainContainer}>
        <div className={styles.container}>
          <div className={styles.profile}>
            <div className={styles.profileImg}>
                <Image src="/images/receiptIcon.svg" width={121} height={121}/>
                <p>Data Purchase Successful</p>
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
                    <p className={styles.detailContent}>1GB 7Days for ₦600 </p>
                  </div>
                </div>
                <div className={styles.downloadBtn}>
                  <Image src="/images/downloadBtn.svg" width={20} height={20}/>
                  <p>Download Receipt</p>
                </div> 
            </div>
            <div className={styles.saveBtn}>
              Go back Home
            </div>
          </div>
        </div>
      </section>
    </>
  )

}