import React from 'react';
import styles from './credentialsPage.module.css';

const CredentialsPage: React.FC = () => {
  return (
    <div className={styles.credentialsContainer}>

      <h3 className={styles.credentialsH3}>Certificates</h3>
      <ul className={styles.credentialsUl}>
        <li className={styles.credentialsLi}><a className={styles.credentialsA} href="public\assets\images\backend.jpg">Backend Graduation Certificate</a></li>
        <li className={styles.credentialsLi}><a className={styles.credentialsA} href="public\assets\images\frontend.jpg">Frontend Graduation Certificate</a></li>
        <li className={styles.credentialsLi}><a className={styles.credentialsA} href="public\assets\images\fullstack.jpg">Fullstack Graduation Certificate</a></li>
      </ul>
      <h2 className={styles.credentialsHeading}>My Credentials</h2>
      <p className={styles.credentialsPara}>Having graduated school with a specialization in full-stack web development, I embarked on my journey as a self-taught programmer. Over time, I've delved into both web and mobile application development, mastering frontend and backend tools such as Express, MongoDB, and much more. I've explored a myriad of frameworks, programming languages, libraries, and tools. Among the vast ocean of technologies, React, ReactJS, React Native, Vite, Bootstrap, and Reactstrap are my personal favorites.</p>
      <p className={styles.credentialsPara}>There are so many more I want to explore so anyone is welcome to ask for my service with almost any technology situation and I will be forthcoming if I personally can handle that or not. If not, I will point you in the correct direction to get your needs taken care of. Customer Satisfaction Guaranteed. I'd be happy to help everyone that I can. Little to barely any money payment plans and much more. I'm here for you! Not me. So go ahead and check out my credentials then head on over to my contact page to request a consultation for what you have in mind.</p>
    </div>
  )
}

export default CredentialsPage;
