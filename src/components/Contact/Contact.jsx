import React, { useState } from 'react';
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

  // Function to validate email format
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Function to handle input field blur event and set validation errors
  const handleBlur = (e) => {
    const { name, value } = e.target;
    let error = '';

    if (value.trim() === '') {
      error = `${name} is required`;
    } else if (name === 'email' && !validateEmail(value)) {
      error = 'Invalid email address';
    }

    setFormErrors({
      ...formErrors,
      [name]: error
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
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
          <a href="mailto:ZacharyPolof@gmail.com">ZacharyPolof@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/ZacharyPolof">linkedin.com/in/ZacharyPolof</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/IVIonsters">github.com/IVIonsters</a>
        </li>
      </ul>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={formErrors.name ? styles.error : ''}
          />
          {formErrors.name && <span className={styles.errorMessage}>{formErrors.name}</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={formErrors.email ? styles.error : ''}
          />
          {formErrors.email && <span className={styles.errorMessage}>{formErrors.email}</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={formErrors.message ? styles.error : ''}
          />
          {formErrors.message && <span className={styles.errorMessage}>{formErrors.message}</span>}
        </div>
        <button type="submit" className={styles.submitButton}>Send Message</button>
      </form>
    </footer>
  );
};
