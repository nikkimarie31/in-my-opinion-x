import React from 'react';
import styles from '../styles/aboutPage.module.css';

const AboutPage: React.FC = () => {
  return (
    <div className={styles.aboutPageContainer}>
      <h1 className={styles.aboutPageHeadingOne}>About Me</h1>
      <div className={styles.aboutPageContent}>
        <p className={styles.aboutPageParagraph}>
          Welcome to my world! I'm Nikki, and I craft digital experiences that resonate. My toolkit includes React for seamless interfaces, Node.js for robust server-side logic, and MongoDB for structured data. I also have experience in React Native, Expo, Express, and many more. Guided by my mentor, Abbi, I'm sharpening my backend prowess due to the fact that, that is his speciality.
        </p>
        <p className={styles.aboutPageParagraph}>
          At Crixus Tech, my role as Managing Partner isn't just a job but it's where my code contributes to a grander vision, and where our professional ensemble operates like a tight-knit family. It's here that I'm going to become a partner, which is a testament to my dedication and our collective success.
        </p>
        <p className={styles.aboutPageParagraph}>
          I invite you to join me on this tech adventure. The path is complex but rewarding, and its best navigated with curiosity. So reach out, question, and explore. The tech landscape is vast and ready for you.
        </p>

        <h2 className={styles.aboutPageHeadingTwo}>My Journey</h2>
        <p className={styles.aboutPageParagraph}>
          Beyond the screen, my heart belongs to my four children. My two boys and girls light up my life, with each showing promise in their unique ways. From the tech-savvy potential of my youngest to the health and fitness dedication of my elder son, they are my pride. We cherish the memory of Nevaeh, may she rest in peace and be in our hearts forever. The kids bond is my anchor, from my oldest and youngest relationship, to the playful rivalry of my sons. They are the beat to my code and the joy in my journey.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
