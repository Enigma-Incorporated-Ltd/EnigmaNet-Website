import { useState } from 'react';

const API_URL = import.meta.env.VITE_NEWSLETTER_API_URL;

interface NewsletterFormData {
  email: string;
  name: string;
  company: string;
  interestAreas: string[];
}

export const useNewsletterApi = () => {
  const [formData, setFormData] = useState<NewsletterFormData>({
    email: '',
    name: '',
    company: '',
    interestAreas: [],
  });

  const [errors, setErrors] = useState({
    email: '',
  });

  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const validate = () => {
    const email = formData.email.trim();

    if (!email) {
      setErrors({ email: 'Email is required.' });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setErrors({ email: 'Please enter a valid email address.' });
      return false;
    }

    setErrors({ email: '' });
    return true;
  };

  const subscribeNewsletter = async () => {
    if (!validate()) return false;

    setSending(true);

    try {
      const payload = {
        emailAddress: formData.email.trim(),
        name: formData.name.trim(),
        company: formData.company.trim(),
        interestAreas: formData.interestAreas,
        source: 'Enigma Net Website',
      };

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ApiKey: import.meta.env.VITE_NEWSLETTER_API_KEY,
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || 'Failed to subscribe.');
      }

      setSubmitted(true);
      setSuccessMessage(data?.message || 'You have successfully subscribed.');

      setFormData({
        email: '',
        name: '',
        company: '',
        interestAreas: [],
      });

      setErrors({ email: '' });

      return true;
    } catch (error: any) {
      setErrors({
        email: error?.message || 'Something went wrong.',
      });
      return false;
    } finally {
      setSending(false);
    }
  };

  return {
    formData,
    setFormData,
    errors,
    sending,
    submitted,
    successMessage,
    subscribeNewsletter,
  };
};
