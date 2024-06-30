import React from 'react';
import styles from '../styles/aboutPage.module.css';

const AboutPage: React.FC = () => {
  return (
    <div className={styles.aboutPageContainer}>
      <h1 className={styles.aboutPageHeadingOne}>About Me</h1>
      <div className={styles.aboutPageContent}>
        <p className={styles.aboutPageParagraph}>
          My name is Nikki, and I'm a passionate full-stack web developer with a deep love for technology and continuous learning. I specialize in React, React Native, TypeScript, and JavaScript. I enjoy creating interactive and engaging web experiences.
        </p>
        <p className={styles.aboutPageParagraph}>
          With years of experience, I've developed a strong foundation in both frontend and backend development, always striving to stay updated with the latest trends and technologies. I believe in the power of code to create impactful solutions and make a difference.
        </p>
        <p className={styles.aboutPageParagraph}>
          I'm currently open to new opportunities and collaborations. Let's connect and create something amazing together!
        </p>

        <h2 className={styles.aboutPageHeadingTwo}>My Journey</h2>
        <p className={styles.aboutPageParagraph}>
          I began my journey in web development with a keen interest in building dynamic and user-friendly applications. Over the years, I have honed my skills through various projects and continuous self-learning. My goal is to leverage my expertise to contribute to innovative projects and help businesses achieve their objectives.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
