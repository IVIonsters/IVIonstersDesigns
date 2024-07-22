import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Zachary Polof</h1>
                <p className={styles.description}>
                {'Passion for programming and am constantly looking for ways to expand my knowledge, Let\'s connect and build something to change the world.'}
                </p>
                <img
                    src={getImageUrl("hero/heroImage.png")}
                    alt="IVIonsters Designs Logo"
                    className={styles.heroImg}/>
                <div className={styles.topBluer}/>
                <div className={styles.bottomBlur}/>
            </div>
        </section>
                )
}
