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
                                I am a passionate frontend developer focused on building responsive, user-friendly websites. I have hands-on experience working with various frameworks and technologies to create optimized, efficient web applications.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/server.png")} alt="Server icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>
                                I have developed back-end systems and APIs using technologies like Node.js, Express, MongoDB, and PostgreSQL. I enjoy creating solutions that deliver strong performance and meet the needs of diverse projects.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/dockerfile.png")} alt="UI icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Docker</h3>
                            <p>
                                I have experience with Docker and containerization, enabling smoother development and deployment workflows. I’ve worked with Docker containers and Docker Compose to help optimize applications for better scalability and performance.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}
