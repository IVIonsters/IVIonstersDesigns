/* eslint-disable no-undef */
import React from 'react';
import styles from './Contact.module.css';
import { getImageUrl } from '../../utils';

export const Contact = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // State to manage form errors
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Function to handle input changes and update formData state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Lets Connect</h2>
        <p>and build something</p>
        <p>to change the world</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:myemail@email.com">ZacharyPolof@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/ZacharyPolof">linkedin.com/ZacharyPolof</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/IVIonsters">github.com/IVIonsters</a>
        </li>
      </ul>
    </footer>
  )
};