import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './title.module.scss';

const Title = () => {
  return (
      <div className={styles.title}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <Image src="/Assets/Images/xnxx-banner.png" alt="Logo" width={314} height={60} />
          </div>
          <div className={styles.links}>
            <Link style={{fontFamily:"PaytoneOne"}} href="#"><b>Categories:</b></Link>
            <Link style={{fontFamily:"PaytoneOne"}}href="#">Findom</Link>
            <Link style={{fontFamily:"PaytoneOne"}} href="#">Crypto Masochism</Link>
            <Link style={{fontFamily:"PaytoneOne"}} href="#">BDSM</Link>
            <Link style={{fontFamily:"PaytoneOne"}} href="#">Scat</Link>
          </div>
        </div>
      </div>
  );
};

export default Title;
