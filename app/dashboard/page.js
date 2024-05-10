"use client"

import Image from "next/image";
import styles from "./page.module.css";

import { FaNairaSign } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";



import DashboardNav from "@components/dashboardNav";
import Sample from "@components/sample";


export default function Home() {

   

  return (

    <>
       <DashboardNav />
       <Sample>
        Help
      </Sample>
      
      <div className={styles.mainContainer}>
        
        <div className={styles.container}>

        

          <section className={styles.accountName}>

            <div className={styles.nameCol}>
              <h2>Welcome</h2>
              <h1>Samuel Ayano</h1>
            </div>
            <div className={styles.nameIcon}>
              <Image className={styles.nameIconImage}
                src="/images/nameIcon.svg"
                width={253}
                height={144}/>
            </div>

          </section>

          <section className={styles.balance}>

            <div className={styles.mainBalance}>
              <p>Main balance <Image src="/images/Eye.svg" width={12} height={12}/></p>
              <h1> <FaNairaSign /> 100,000 </h1>
              <p>Reward Bal: <span><FaNairaSign />15,000</span></p>
            </div>

            <div className={styles.topUp}>
              <FaPlus />
              <p>Top Up</p>
            </div>
          </section>

          <section className={styles.servicesContainer}>
            <h1>Services</h1>
            <div className={styles.servicesCol}>

                <div className={styles.services}>
                <Image
                    src="/images/services/phone.svg" 
                    width={15}
                    height={15}
                    />
                  <p>Airtime</p>
                </div>
                <div className={styles.services}>
                <Image
                    src="/images/services/bi_phone.svg" 
                    width={15}
                    height={15}
                    />
                  <p>Data</p>
                </div>
                <div className={styles.services}>
                <Image
                    src="/images/services/electricity.svg" 
                    width={15}
                    height={15}
                    />
                  <p>Electricity</p>
                </div>
                <div className={styles.services}>
                <Image
                    src="/images/services/cable.svg" 
                    width={15}
                    height={15}
                    />
                  <p>Cable</p>
                </div>
                <div className={styles.services}>
                <Image
                    src="/images/services/tv.svg" 
                    width={15}
                    height={15}
                    />
                  <p>Tv</p>
                </div>
                <div className={styles.services}>
                <Image
                    src="/images/services/internet.svg" 
                    width={15}
                    height={15}
                    />
                  <p>Internet</p>
                </div>
              
            </div>
          </section>

          <section className={styles.transactions}>
            <div className={styles.transactionsHeader}>
              <h1>Transactions</h1>
              <a>see more</a>
            </div>

            <div className={styles.transactionsCol}>
              <div>Transaction Type</div>
              <div>Amount</div>
              <div>Description</div>
              <div>Status</div>
              <div>Date</div>
            </div>

            <div className={styles.transactiondetails}>
              <div className={styles.detailCol}>
                <div className={styles.type}>Airtime</div>
                <div className={styles.amount}><FaNairaSign />1,000</div>
                <div className={styles.description}>Airtime Purchase</div>
                <div className={styles.status}>successfull</div>
                <div className={styles.date}>Nov 20, 2023 8:55AM</div>
              </div>
              <div className={styles.detailCol}>
                <div className={styles.tpe}>Data</div>
                <div className={styles.amount}><FaNairaSign />5,000</div>
                <div className={styles.description}>Data Purchase</div>
                <div className={styles.status}>successfull</div>
                <div className={styles.date}>Nov 20, 2023 8:55AM</div>
              </div>
              <div className={styles.detailCol}>
                <div className={styles.type}>Top up</div>
                <div className={styles.amount}><FaNairaSign />40,000</div>
                <div className={styles.description}>Top up to account</div>
                <div className={styles.status}>successfull</div>
                <div className={styles.date}>Nov 20, 2023 8:55AM</div>
              </div>
              <div className={styles.detailCol}>
                <div className={styles.type}>Airtime</div>
                <div className={styles.amount}><FaNairaSign />1,000</div>
                <div className={styles.description}>Airtime Purchase</div>
                <div className={styles.status}>successfull</div>
                <div className={styles.date}>Nov 20, 2023 8:55AM</div>
              </div>
              <div className={styles.detailCol}>
                <div className={styles.type}>Data</div>
                <div className={styles.amount}><FaNairaSign />3,000</div>
                <div className={styles.description}>Data Purchase</div>
                <div className={styles.status}>successfull</div>
                <div className={styles.date}>Nov 20, 2023 8:55AM</div>
              </div>
              <div className={styles.detailCol}>
                <div className={styles.type}>Airtime</div>
                <div className={styles.amount}><FaNairaSign />1,000</div>
                <div className={styles.description}>Airtime Purchase</div>
                <div className={styles.status}>successfull</div>
                <div className={styles.date}>Nov 20, 2023 8:55AM</div>
              </div>
              <div className={styles.detailCol}>
                <div className={styles.type}>Electricity</div>
                <div className={styles.amount}><FaNairaSign />10,000</div>
                <div className={styles.description}>Airtime Purchase</div>
                <div className={styles.status}>successfull</div>
                <div className={styles.date}>Nov 20, 2023 8:55AM</div>
              </div>
            </div>

            <div className={styles.transactionBtns}>
              <button>Previous</button>
              <button>Next</button>
            </div>
          </section>

        </div>

      </div>
     
   
    </>

  );
}
