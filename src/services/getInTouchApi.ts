import { useState } from 'react';

export const useGetInTouchApi = (isLead: boolean = false) => {
  const [successMessage, setSuccessMessage] = useState('');

  const [errors, setErrors] = useState({
    company: '',
    email: '',
    firstname: '',
    lastname: '',
    jobtitle: '',
    message: '',
    telephoneNumber: '',
  });

  const [formData, setFormData] = useState({
    company: '',
    email: '',
    firstname: '',
    lastname: '',
    jobtitle: '',
    message: '',
    numberOfSites: '',
    telephoneNumber: '',
    mainInfrastructurePriority: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const validate = () => {
    const newErrors: any = {};

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
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

    // Message is required only when isLead is false
    if (!isLead && !formData.message.trim()) {
      newErrors.message = 'Message cannot be empty';
    }

    // Telephone number is OPTIONAL.
    // Validate only if the user has entered a value.
    if (formData.telephoneNumber.trim() && formData.telephoneNumber.length < 10) {
      newErrors.telephoneNumber = 'Enter a valid telephone number';
    }

    if (formData.telephoneNumber.trim() && formData.telephoneNumber.length > 15) {
      newErrors.telephoneNumber = 'Telephone number cannot exceed 15 digits';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Telephone number: numbers only, maximum 15 digits
    const updatedValue = name === 'telephoneNumber' ? value.replace(/\D/g, '').slice(0, 15) : value;

    // Update form data
    setFormData(prev => ({
      ...prev,
      [name]: updatedValue,
    }));

    // Validate this field only
    setErrors(prev => {
      let error = '';

      // Telephone number is optional
      if (name === 'telephoneNumber') {
        if (updatedValue.trim()) {
          if (updatedValue.length < 10) {
            error = 'Enter a valid telephone number';
          } else if (updatedValue.length > 15) {
            error = 'Telephone number cannot exceed 15 digits';
          }
        }

        return {
          ...prev,
          [name]: error,
        };
      }

      // Required field validation
      if (!updatedValue.trim()) {
        switch (name) {
          case 'company':
            error = 'Company name is required';
            break;

          case 'email':
            error = 'Email is required';
            break;

          case 'firstname':
            error = 'First name is required';
            break;

          case 'lastname':
            error = 'Last name is required';
            break;

          case 'jobtitle':
            error = 'Job title is required';
            break;

          case 'message':
            error = isLead ? '' : 'Message cannot be empty';
            break;

          default:
            error = 'This field is required';
        }
      } else {
        // Email validation
        if (name === 'email' && !/\S+@\S+\.\S+/.test(updatedValue)) {
          error = 'Enter a valid email';
        }
      }

      return {
        ...prev,
        [name]: error,
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setSending(true);

    const fullName = `${formData.firstname} ${formData.lastname}`.trim();

    // Only send fields that are not empty
    const payload = Object.fromEntries(
      Object.entries({
        companyName: formData.company,
        email: formData.email,
        fullName,
        jobTitle: formData.jobtitle,
        message: formData.message,
        numberOfSites: formData.numberOfSites,
        telephoneNumber: formData.telephoneNumber,
        mainInfrastructurePriorityId: formData.mainInfrastructurePriority,
      }).filter(([_, value]) => value?.trim() !== '')
    );

    try {
      const res = await fetch(import.meta.env.VITE_GET_IN_TOUCH_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // Safely handle empty/non-JSON response
      const text = await res.text();

      let data: any = {};

      if (text) {
        try {
          data = JSON.parse(text);
        } catch {
          data = {
            message: text,
          };
        }
      }

      if (res.ok) {
        setSuccessMessage(data?.message || 'Your request has been submitted successfully.');
        setSubmitted(true);
      } else {
        console.error('API Error:', data);

        setSuccessMessage(data?.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Submit error:', err);
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
