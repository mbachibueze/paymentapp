"use client"
import {useSearchParams, usePathname} from "next/navigation";


import image from "next/image";
import styles from "./modal.module.css"
import Link from "next/link";

function Modal(){

  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathname = usePathname();

  return(
    <>
    {modal &&

      <dialog className={styles.container}>
        <div className={styles.content}>
          <h1>Modal Layout</h1><br/>
          <Link href={pathname}>
            <button type="button">Click!</button>
          </Link>
        </div>
      </dialog>
    
    }
    </>
  )
}

export default Modal;