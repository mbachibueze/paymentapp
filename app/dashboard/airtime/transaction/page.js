

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
      <div className={styles.header}>Confirm Transaction</div>
          <div className={styles.maintransaction}>
            <Image src="/images/9mobile.svg" width={50} height={50}/>
            <div className={styles.transactionContent}>
              <div className={styles.details}>
                <div>
                  
                </div>
              </div>
            </div>
          </div>
      </Sample>
    </>
  )
}