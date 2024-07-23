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