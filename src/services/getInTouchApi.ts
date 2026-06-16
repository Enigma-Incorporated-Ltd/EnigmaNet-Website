import { useState } from 'react';

export const useGetInTouchApi = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errors, setErrors] = useState({
    company: '',
    email: '',
    firstname: '',
    lastname: '',
    jobtitle: '',
    message: '',
  });

  const [formData, setFormData] = useState({
    company: '',
    email: '',
    firstname: '',
    lastname: '',
    jobtitle: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const validate = () => {
    let newErrors: any = {};

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
    }

    if (!formData.firstname.trim()) {
      newErrors.firstname = 'First name is required';
    }

    if (!formData.lastname.trim()) {
      newErrors.lastname = 'Last name is required';
    }

    if (!formData.jobtitle.trim()) {
      newErrors.jobtitle = 'Job title is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message cannot be empty';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // update form data
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // validate this field only
    setErrors((prev: any) => {
      let error = '';

      if (!value.trim()) {
        error = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
      } else {
        if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
          error = 'Enter a valid email';
        }
      }

      return {
        ...prev,
        [name]: error,
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    setSending(true);

    const fullName = `${formData.firstname} ${formData.lastname}`.trim();

    const payload = {
      companyName: formData.company,
      email: formData.email,
      fullName,
      jobTitle: formData.jobtitle,
      message: formData.message,
    };

    try {
      const res = await fetch(import.meta.env.VITE_GET_IN_TOUCH_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      setSuccessMessage(data.message);
      if (res.ok) {
        setSubmitted(true);
      } else {
        console.error(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSending(false);
    }
  };

  return {
    validate,
    handleChange,
    handleSubmit,
    errors,
    formData,
    submitted,
    sending,
    successMessage,
  };
};
