import React from 'react';
import Link from 'next/link';
import styles from './styles/Footer.module.css'; // Make sure to create this CSS module

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <h6>In My Opinion</h6>
                <img src="/logo.png" alt="In My Opinion" />
            </div>
            <div>
                <Link href="/">Home</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/credentials">Credentials</Link>
                <Link href="/privacy">Privacy & Disclaimer</Link>
                <Link href="/terms">Terms & Conditions</Link>

            </div>
            <button className={styles.subscribeButton}>Subscribe</button>
            <div>
                © {new Date().getFullYear()} Your Company. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
