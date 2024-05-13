import styles from "./tnxDetail.module.css";
import Image from "next/image";

export default function tnxDetail({children}) {
  return (
    <>
    <div className={styles.generalContainer}>
      <div className={styles.general}>
        </div>
          <div className={styles.transaction}>
            <div className={styles.popUpHeader}>
              <p className={styles.header}><span>Transaction Detail </span>
              <span className={styles.close}>
                <Image src="/images/close.svg" width={24} height={24}/>
              </span>
              </p>

            </div>
            <div className={styles.popUpBody}>
                <div className={styles.popUpImg}>
                    <Image src="/images/mtn.svg" width={50} height={50}/>
                </div>
                <div className={styles.popUpCol}>
                      <div className={styles.popUpDetails}>
                        <p className={styles.detailMain}>Description:</p>
                        <p className={styles.detailContent}>Data purchase</p>
                      </div>
                      <div className={styles.popUpDetails}>
                        <p className={styles.detailMain}>To:</p>
                        <p className={styles.detailContent}>081710212455</p>
                      </div>
                      <div className={styles.popUpDetails}>
                        <p className={styles.detailMain}>Network:</p>
                        <p className={styles.detailContent}>MTN-NG</p>
                      </div>
                      <div className={styles.popUpDetails}>
                        <p className={styles.detailMain}>Charges:</p>
                        <p className={styles.detailContent}>₦0.00</p>
                      </div>
                      <div className={styles.popUpDetails}>
                        <p className={styles.detailMain}>Bundle:</p>
                        <p className={styles.detailContent}>20GB 30Days for ₦5000 </p>
                      </div>
                      <div className={styles.popUpDetails}>
                        <p className={styles.detailMain}>Transaction type:</p>
                        <p className={styles.detailContent}>Data</p>
                      </div>
                      <div className={styles.popUpDetails}>
                        <p className={styles.detailMain}>Transaction ID:</p>
                        <p className={styles.detailContent}>83ud9j87hd9873</p>
                      </div>
                      <div className={styles.popUpDetails}>
                        <p className={styles.detailMain}>Date created:</p>
                        <p className={styles.detailContent}>Nov 20, 2023 8:55 AM</p>
                      </div>
                      <div className={styles.popUpDetails}>
                        <p className={styles.detailMain}>Amount:</p>
                        <p className={styles.detailContent}>₦5000</p>
                      </div>
                      <div className={styles.popUpDetails}>
                        <p className={styles.detailMain}>Status:</p>
                        <p className={styles.detailContent}><span className={styles.tnxstatus}>failed</span></p>
                      </div>
                </div>
                <div className={styles.downloadBtn}>
                      <Image src="/images/downloadBtn.svg" width={20} height={20}/>
                      <p>Download Receipt</p>
                </div> 
            </div>
          </div>

    </div>
    </>
  )
}