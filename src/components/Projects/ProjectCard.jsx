/* eslint-disable react/prop-types */
import React from 'react';

import styles from './ProjectCard.module.css';
import { getImageUrl } from '../../utils';

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, repo },
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
        />
        <div className={styles.details}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <ul className={styles.skills}>
            {skills.map((skill, id) => {
              return (
                <li key={id} className={styles.skill}>
                  {skill}
                </li>
              );
            })}
          </ul>
          <div className={styles.links}>
            <a href={demo} className={styles.link}>
              Demo
            </a>
            <a href={repo} className={styles.link}>
              Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};