import React, { useState } from 'react';
import Link from 'next/link';
import styles from './styles/Footer.module.css'; // Adjust the path as per your project structure

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

  const handleSubscribe = async () => {
    if (!emailRegex.test(email)) {
      setMessage('Please enter in a valid email');
      setIsError(true);
      return;
    }
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();

      if (response.ok) {
        setMessage('Subscription successful! Thank you for subscribing.');
        setIsError(false);
      } else {
        throw new Error(data.message || 'Error occurred while subscribing');
      }
    } catch (error: any) {
      setMessage(error.message);
      setIsError(true);
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div>
        <h6>In My Opinion</h6>
        <img src="/logo.png" alt="In My Opinion" style={{ width: '50px', height: 'auto' }} className={styles.footerLogo} />
        </div>
      </div>
      <div className={styles.footerLinks}>
        <Link href="/" className={styles.footerLink}>Home</Link>
        <Link href="/blog" className={styles.footerLink}>Blog</Link>
        <Link href="/about" className={styles.footerLink}>About</Link>
        <Link href="/contact" className={styles.footerLink}>Contact</Link>
        <Link href="/credentials" className={styles.footerLink}>Credentials</Link>
        <Link href="/privacy" className={styles.footerLink}>Privacy & Disclaimer</Link>
        <Link href="/terms" className={styles.footerLink}>Terms & Conditions</Link>
      </div>
      <div className={styles.footerSection}>
        <input 
          type="email" 
          placeholder="Your email" 
          value={email} 
          onChange={handleEmailChange} 
          className={styles.subscribeInput}
        />
        <button 
          onClick={handleSubscribe} 
          className={styles.subscribeButton}
        >
          Subscribe
        </button>
        {message && (
          <p style={{ color: isError ? 'red' : 'green' }}>{message}</p>
        )}
      </div>
      <div className={styles.footerBottom}>
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
