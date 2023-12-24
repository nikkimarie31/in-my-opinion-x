import React from 'react';
import styles from '../styles/privacyPolicy.module.css';

const PrivacyPolicy: React.FC = () => {
    return (
        <article className={styles.privacyPolicyContainer}>
            <header>
                <h1>Privacy Policy & Disclaimer</h1>
            </header>

            <section>
                <h3>Introduction</h3>
                <p>Welcome to In My Opinion. We are committed to protecting the privacy of our visitors and users. This Privacy Policy outlines our practices concerning the collection, use, and disclosure of your personal information.</p>
            </section>

            <section>
                <h3>Information Collection</h3>
                <p>We collect personal information that you provide to us, such as your name, email address, and other contact details. This information is collected through forms, email subscriptions, and other interactions on our website.</p>
            </section>

            <section>
                <h3>Use of Information</h3>
                <p>The information we collect is used to provide and improve our services, communicate with you, and enhance your experience on our website. We may also use this information for internal analysis and marketing purposes.</p>
            </section>

            <section>
                <h3>Information Sharing and Disclosure</h3>
                <p>We do not sell or rent personal information to third parties. We may share information with trusted partners and service providers who assist us in operating our website and conducting our business, as long as those parties agree to keep this information confidential.</p>
            </section>

            <section>
                <h3>Data Security</h3>
                <p>We take reasonable measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</p>
            </section>

            <section>
                <h3>User Rights</h3>
                <p>You have the right to access, correct, or delete your personal information. Please contact us if you wish to exercise these rights.</p>
            </section>

            <section>
                <h3>Cookies and Tracking Technologies</h3>
                <p>We use cookies and similar tracking technologies to track activity on our website and hold certain information to improve your user experience.</p>
            </section>

            <section>
                <h3>Policy Updates</h3>
                <p>This Privacy Policy may be updated from time to time. We will notify you of any changes by posting the new policy on this page.</p>
            </section>

            <section>
                <h3>Contact Information</h3>
                <p>If you have any questions about this Privacy Policy, please contact us.</p>
            </section>

            <section>
                <h1>Disclaimer</h1>
                <h3>General Information</h3>
                <p>The information provided on In My Opinion is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.</p>

                <h3>No Professional Advice</h3>
                <p>The information on In My Opinion is not professional advice. Any action you take upon the information on this website is strictly at your own risk, and we will not be liable for any losses or damages in connection with the use of our website.</p>

                <h3>Limitation of Liability</h3>
                <p>Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.</p>

                <h3>External Links</h3>
                <p>Our website may contain links to external websites that are not provided or maintained by or in any way affiliated with us. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.</p>

                <h3>Contact Information</h3>
                <p>If you have any questions or concerns about the disclaimer, please contact us.</p>
            </section>
        </article>
    );
};

export default PrivacyPolicy;
