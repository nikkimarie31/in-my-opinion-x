import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from '../styles/contactPage.module.css';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const validateForm = (): boolean => {
    let currentErrors: FormErrors = {};
    let formIsValid = true;

    // Name Validation
    if (!formData.name) {
      formIsValid = false;
      currentErrors["name"] = "Name cannot be empty";
    }

    // Email Validation
    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(formData.email)) {
      formIsValid = false;
      currentErrors["email"] = "Email is not valid";
    }

    // Message Validation
    if (!formData.message) {
      formIsValid = false;
      currentErrors["message"] = "Message cannot be empty";
    }

    setErrors(currentErrors);
    return formIsValid;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setErrors({});
    }
  };

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor='name' className={styles.formLabel}>Name:</label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            className={styles.formInput}
          />
          {errors.name && <div className={styles.errorMessage}>{errors.name}</div>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.formLabel}>Email:</label>
          <input 
            type="email"
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className={styles.formInput}
          />
          {errors.email && <div className={styles.errorMessage}>{errors.email}</div>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="subject" className={styles.formLabel}>Subject:</label>
          <input
            type='text'
            id='subject'
            name='subject'
            value={formData.subject}
            onChange={handleChange}
            className={styles.formInput}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor='message' className={styles.formLabel}>Message:</label>
          <textarea 
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            className={styles.formTextarea}
          />
          {errors.message && <div className={styles.errorMessage}>{errors.message}</div>}
        </div>

        <button type='submit' className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
