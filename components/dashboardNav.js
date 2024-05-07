"use client"

import Image from "next/image";
import styles from "./dashboardNav.module.css";

// React Icon -start
import { FaNairaSign } from "react-icons/fa6";
import { CiMenuFries } from "react-icons/ci";
// React Icons -end

import {useState, useEffect} from 'react'


const DashboardNav = () =>{

  // const position = window.scrollY;
  const [isVisible, setIsVisible] = useState(false);
  const [isNotificationVisible, setNotificationVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);

    const openProfile = () =>{
      setIsVisible(!isVisible)
    }
    const openNotification = () =>{
      setNotificationVisible(!isNotificationVisible)
    }
  

    useEffect(() => {
      // Function to handle scroll event
      const handleScroll = () => {
        // Update scroll position state
        setScrollPosition(position);
      };
  
      // Add event listener for scroll event
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup function to remove event listener when component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []); // Empty dependency array ensures this effect runs only once
  
    // This effect will run only once when the component mounts,
    // and whenever scrollPosition changes, it will alert the current scroll position
    useEffect(() => {

      if(isNotificationVisible && scrollPosition > 100) {

        openNotification();
        // alert(scrollPosition);
      }
     
    }, [scrollPosition]);
    

  return(
    <>

      <div className={styles.navigationContainer}>
        <div className={styles.navigation}>
            
            <Image
              src="/images/logo.svg"
              width={98.81}
              height={27}
              />

            <div className={styles.navlinksCon}>

              <div className={styles.navlink}>
                <Image 
                  src="/images/home.svg"
                  width={20}
                  height={20}
                  />
                  <a>Dashboard</a>
              </div>

              <div className={styles.navlink}>
                <Image 
                  src="/images/frame.svg"
                  width={20}
                  height={20}
                  />
                  <a>Transactions</a>
              </div>

              <div onClick={openNotification} >
                <Image
                  src="/images/bell.svg"
                  width={24}
                  height={24}
                  />
              </div>

              {
                isNotificationVisible && (
                  <div className={styles.notification}>
                    <h1>Notifications</h1>
                    <div className={styles.notificationCol}>
                    <div className={styles.notificationContainer}>
                      <div className={styles.notImage}>
                        <Image 
                          src="/images/services/phone.svg"
                          width={15}
                          height={15}
                          />
                      </div>
                      <div className={styles.notificationContent}>Airtime purchase of  <FaNairaSign />1,000 successfull </div>
                      <div>Nov 20, 2023 8:55Am</div>
                    </div>
                    <div className={styles.notificationContainer}>
                      <div className={styles.notImage}>
                        <Image 
                          src="/images/services/phone.svg"
                          width={15}
                          height={15}
                          />
                      </div>
                      <div className={styles.notificationContent}>Airtime purchase of  <FaNairaSign />1,000 successfull </div>
                      <div>Nov 20, 2023 8:55Am</div>
                    </div>
                    <div className={styles.notificationContainer}>
                      <div className={styles.notImage}>
                        <Image 
                          src="/images/services/phone.svg"
                          width={15}
                          height={15}
                          />
                      </div>
                      <div className={styles.notificationContent}>Airtime purchase of  <FaNairaSign />1,000 successfull </div>
                      <div>Nov 20, 2023 8:55Am</div>
                    </div>
                    <div className={styles.notificationContainer}>
                      <div className={styles.notImage}>
                        <Image 
                          src="/images/services/phone.svg"
                          width={15}
                          height={15}
                          />
                      </div>
                      <div className={styles.notificationContent}>Airtime purchase of  <FaNairaSign />1,000 successfull </div>
                      <div>Nov 20, 2023 8:55Am</div>
                    </div>
                    <div className={styles.notificationContainer}>
                      <div className={styles.notImage}>
                        <Image 
                          src="/images/services/phone.svg"
                          width={15}
                          height={15}
                          />
                      </div>
                      <div className={styles.notificationContent}>Airtime purchase of  <FaNairaSign />1,000 successfull </div>
                      <div>Nov 20, 2023 8:55Am</div>
                    </div>
                    </div>
                    <div className={styles.notificationBtn}>
                      <button>view more</button>
                    </div>
                  </div>
                )
              }

              <div onClick={openProfile} className={styles.profile}>
                <Image 
                  src="/images/profileIcon.svg"
                  width={40}
                  height={40}
                  />
                  <a>Samuel Ayano</a>
              </div>

              {
                isVisible && (

                  <div  className={styles.profileDropdown}>
                    <div className={styles.profileDropdownContainer}>
                      <div className={styles.profileDropdownImage}>
                        <Image src="/profileDropdown/account.svg" width={13} height={13}/>
                      </div>
                      <div className={styles.profileDropdownContent}>
                        Account
                      </div>
                    </div>
                    <div className={styles.profileDropdownContainer}>
                      <div className={styles.profileDropdownImage}>
                        <Image src="/profileDropdown/settings.svg" width={13} height={13}/>
                      </div>
                      <div className={styles.profileDropdownContent}>
                        Setting
                      </div>
                    </div>
                    <div className={styles.profileDropdownContainer}>
                      <div className={styles.profileDropdownImage}>
                        <Image src="/profileDropdown/logout.svg" width={13} height={13}/>
                      </div>
                      <div className={styles.profileDropdownContent}>
                        Logout
                      </div>
                    </div>
                  </div>

                )
              }

            </div>

            <div className={styles.toggleBtn}>

              <div onClick={openNotification} >
                  <Image
                    src="/images/bell.svg"
                    width={20}
                    height={20}
                    />
              </div>
                
              <div onClick={openProfile} className={styles.profile}>
                  <Image 
                    src="/images/profileIcon.svg"
                    width={20}
                    height={20}
                    />
              </div>

              <div className={styles.toggleICon}>
                <CiMenuFries/>
              </div>

            </div>
        </div>
        {/* <div className={styles.mobileNav}>

            <div onClick={openNotification} >
                <Image
                  src="/images/bell.svg"
                  width={24}
                  height={24}
                  />
            </div>
            
            <div className={styles.navlink}>
                <Image 
                  src="/images/home.svg"
                  width={20}
                  height={20}
                  />
                  <a>Dashboard</a>
            </div>

              
            <div className={styles.navlink}>
                <Image 
                  src="/images/frame.svg"
                  width={20}
                  height={20}
                  />
                  <a>Transactions</a>
            </div>

             

        </div> */}
      </div>
    </>
  )
}

export default DashboardNav;