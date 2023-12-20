import React from 'react';
import styles from './styles/freedomOfSpeech.module.css';

const FreedomOfSpeechSection: React.FC = () => {
    return (
        <section className={styles.contentSectionSpeech}>
            <h2 className={styles.contentHeader}>Freedom of Speech - First Amendment</h2>
            <blockquote className={styles.blockquote}>
                "Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press..."
            </blockquote>
            <p>
                - United States Constitution, First Amendment
            </p>
            <p className={styles.freedomParagraph}>
                The views and opinions expressed on this website are my own and do not reflect the views of any organization or entity. I believe in the importance of freedom of speech as outlined in the First Amendment and strive to share my perspectives respectfully and responsibly.
            </p>
        </section>
    );
};

export default FreedomOfSpeechSection;
