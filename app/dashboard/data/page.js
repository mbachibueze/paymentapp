"use client"

import Image from "next/image";
import styles from "./page.module.css";

import DashboardNav from "@components/dashboardNav";

import {useState, useEffect} from 'react'
import { useRouter } from "next/router";


export default function Home() {


  // const pasteNumber = document.getElementsByClassName("numberInput")
  // const [pasteContent, setPasteContent] = useState('');
  // pasteNumber.textContent = "Done"

  // useEffect(() => {
  //   const handlePaste = (event) => {
  //     const clipboardData = event.clipboardData || window.clipboardData;
  //     const pastedText = clipboardData.getData('text');
  //     // Check if pastedText is a number between 0-9
  //     if (/^[0-9]+$/.test(pastedText)) {
  //       setPasteContent(pastedText);
  //     }
  //   };

  //   document.addEventListener('paste', handlePaste);

  //   return () => {
  //     document.removeEventListener('paste', handlePaste);
  //   };
  // }, []);

  // const paste = () => {
  //   alert(pasteNumber)
  //   // Do something with the pasteContent
  //   console.log('Pasted content:', pasteContent);
  // };

  const [isVisible, setIsVisible] = useState(false)
  const inputNetwork = document.getElementById("inputNetwork");
  const airtel = document.querySelector("#airtel");

  const selectNetwork = () =>{
    setIsVisible(!isVisible)
  }
  const [isBundleVisible, setBundleVisibility] = useState(false)

  const selectBundle = () =>{
    setBundleVisibility(!isBundleVisible)
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
                <Image src="/images/services/bi_phone.svg" width={15} height={15}/>
              </div>
                <p>Buy Data</p>
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
                  <Image src="/images/copyIcon.svg"  width={16.81} height={16}/> <p>Paste</p>
                  </div>
                </div>
                <div onClick={selectBundle}  className={styles.network}>
                  <p id={styles.inputNetwork}>Select Bundle</p>
                  <Image src="/images/dropdownIcon.svg"  width={12} height={7.42}/>
                </div>
                {
                  isBundleVisible && (
                    <div className={styles.selectBundle}>
                        <p><Image src="/images/mtn.svg" width={32} height={32}/>1gb 7days <span className={styles.bundleAmount}>
                          <Image src="/images/naira.svg" width={11} height={12}/>600 </span></p>
                        <p><Image src="/images/mtn.svg" width={32} height={32}/>2.5gb 2days <span className={styles.bundleAmount}>
                          <Image src="/images/naira.svg" width={11} height={12}/>600 </span></p>
                        <p><Image src="/images/mtn.svg" width={32} height={32}/>7gb 7 days <span className={styles.bundleAmount}>
                          <Image src="/images/naira.svg" width={11} height={12}/>2,000 </span></p>
                        <p><Image src="/images/mtn.svg" width={32} height={32}/>10gb 30days <span className={styles.bundleAmount}>
                          <Image src="/images/naira.svg" width={11} height={12}/>3,500 </span></p>
                        <p><Image src="/images/mtn.svg" width={32} height={32}/>20gb 30days <span className={styles.bundleAmount}>
                          <Image src="/images/naira.svg" width={11} height={12}/>5,000 </span></p>
                        <p><Image src="/images/mtn.svg" width={32} height={32}/>mtn-Ng</p>
                        <p><Image src="/images/mtn.svg" width={32} height={32}/>mtn-Ng</p>
                        <p><Image src="/images/mtn.svg" width={32} height={32}/>mtn-Ng</p>
                    </div>
                  )
                }
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