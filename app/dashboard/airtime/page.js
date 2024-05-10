"use client"

import Image from "next/image";
import styles from "./page.module.css";

import DashboardNav from "@components/dashboardNav";

import {useState, useEffect} from 'react'
import { useRouter } from "next/router";

export default function Home() {


  const pasteNumber = document.getElementsByClassName("numberInput")
  const [pasteContent, setPasteContent] = useState('');
  pasteNumber.textContent = "Done"

  useEffect(() => {
    const handlePaste = (event) => {
      const clipboardData = event.clipboardData || window.clipboardData;
      const pastedText = clipboardData.getData('text');
      // Check if pastedText is a number between 0-9
      if (/^[0-9]+$/.test(pastedText)) {
        setPasteContent(pastedText);
      }
    };

    document.addEventListener('paste', handlePaste);

    return () => {
      document.removeEventListener('paste', handlePaste);
    };
  }, []);

  const paste = () => {
    alert(pasteNumber)
    // Do something with the pasteContent
    console.log('Pasted content:', pasteContent);
  };

  const [isVisible, setIsVisible] = useState(false)
  const inputNetwork = document.getElementById("inputNetwork");
  const airtel = document.querySelector("#airtel");

  const selectNetwork = () =>{
    setIsVisible(!isVisible)
  }

  const network = () =>{
    alert(airtel)
  }


  const dashboard = () =>{
    Router.push('/dashboard/page.js')
  }



  return (


    <>
      <DashboardNav/>

      <section className={styles.mainContainer}>
        <div className={styles.container}>
          <span onClick={dashboard} className={styles.back}>
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
                <div onClick={selectNetwork}  className={styles.network}>
                  <p id={styles.inputNetwork}>Select Network</p>
                  <Image src="/images/dropdownIcon.svg"  width={12} height={7.42}/>
                </div>
                {
                  isVisible && (
                    <div className={styles.networks}>
                      <p onClick={network} id={styles.airtel}><Image src="/images/airtel.svg" width={32} height={32}/>Airtel-Ng</p>
                      <p><Image src="/images/glo.svg" width={32} height={32}/>Glo-Ng</p>
                      <p><Image src="/images/mtn.svg" width={32} height={32}/>mtn-Ng</p>
                      <p><Image src="/images/9mobile.svg" width={32} height={32}/>9mobile-Ng</p>
                      <p><Image src="/images/9mobile.svg" width={32} height={32}/>9mobile-Ng</p>
                      <p><Image src="/images/9mobile.svg" width={32} height={32}/>9mobile-Ng</p>
                      <p><Image src="/images/9mobile.svg" width={32} height={32}/>9mobile-Ng</p>
                      <p><Image src="/images/9mobile.svg" width={32} height={32}/>9mobile-Ng</p>
                    </div>
                  )
                }
                <div className={styles.network}>
                  <input className={styles.numberInput} type="number" placeholder="Enter Phone Number"></input>
                  <div className={styles.number}>
                  <Image src="/images/copyIcon.svg"  width={16.81} height={16}/> <p onClick={paste}>Paste</p>
                  </div>
                </div>
                <div className={styles.network} id={styles.amount}>
                  <Image src="/images/naira.svg"  width={11} height={17}/>
                  <input type="number" placeholder="Enter Amount"></input>
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