import Link from 'next/link'
import React from 'react'
import styles from './header.module.css'

export default function Header() {
  return (
    
    <React.Fragment>
        <div className={styles.header}>
            <h3>山西省煤炭地质水文勘查研究院有限公司幼儿园</h3>
            <Link className={styles.headerLink} href="/login">Login</Link>
            <Link className={styles.headerLink} href="/login">First</Link>
            <Link className={styles.headerLink} href="/login">Login</Link>
            <Link className={styles.headerLink} href="/login">Login</Link>
        </div>
    </React.Fragment>
    
  )
}
