

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
            <a>Back</a>
          </span>
          <div className={styles.airtime}>
            <div className={styles.airtimeImg}>
              <div className={styles.image}>
                <Image src="/images/services/phone.svg" width={15} height={15}/>
              </div>
                <p>Buy Airtime</p>
            </div>
            <div className={styles.airtimeContent}> 
              <div className={styles.networkContainer}>
                <div className={styles.network}>
                  <p>Select Network</p>
                  <Image src="/images/dropdownIcon.svg"  width={12} height={7.42}/>
                </div>
                <div className={styles.networks}>
                  <p><Image src="/images/airtel.svg" width={32} height={32}/>Airtel-Ng</p>
                  <p><Image src="/images/glo.svg" width={32} height={32}/>Glo-Ng</p>
                  <p><Image src="/images/mtn.svg" width={32} height={32}/>mtn-Ng</p>
                  <p><Image src="/images/9mobile.svg" width={32} height={32}/>9mobile-Ng</p>
                </div>
                <div className={styles.network}>
                  <p>Enter Phone Number</p>
                  <div className={styles.number}>
                  <Image src="/images/copyIcon.svg"  width={16.81} height={16}/> <p>Paste</p>
                  </div>
                </div>
                <div className={styles.network} id={styles.amount}>
                  <Image src="/images/naira.svg"  width={11} height={17}/>
                  <p>Enter Amount</p>
                </div>
              </div>
            </div>
            <div className={styles.saveBtn}>
              Proceed
            </div>
          </div>
        </div>
      </section>
    </>
  )

}