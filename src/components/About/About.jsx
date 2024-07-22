import React from 'react';

import styles from './About.module.css';
import { getImageUrl } from '../../utils';

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>Get to know me</h2>
            <div className={styles.content}>
                <img
                    src={getImageUrl('about/aboutImage.jpg')}
                    alt="Image of IVIonsters Designs"
                    className={styles.aboutImage} />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/dev.png")} alt="Cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>
                                I am a passionate frontend developer with a strong background in building responsive and optimized websites. With extensive experience working with a variety of frameworks and technologies.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/server.png")} alt="Server icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>
                                I have extensive experience in developing fast and optimized back-end systems and APIs using multiple frameworks. My expertise spans across technologies like Node.js, Express, MongoDB, and PostgreSQL, enabling me to deliver high-performance solutions for diverse project needs.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/dockerfile.png")} alt="UI icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Docker</h3>
                            <p>
                                I have extensive experience in containerization using Docker, enabling seamless development and deployment workflows. My proficiency includes creating and managing Docker containers, Docker Compose, and optimizing applications for scalable, efficient performance.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}