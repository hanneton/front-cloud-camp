import { useState, useCallback } from 'react';

export default function useFormAndValidation(inputValues = {}) {
  const [values, setValues] = useState(inputValues);
  const [formValidities, setFormValidities] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const currentForm = e.target.closest('form');
    const { name, value } = e.target;
    setFormValidities({ ...formValidities, [currentForm.id]: currentForm.checkValidity() })
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: e.target.validationMessage });
  };

  // const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
  //   setValues(newValues);
  //   setErrors(newErrors);
  //   setIsValid(newIsValid);
  // }, [setValues, setErrors, setIsValid]);

  return { values, handleChange, errors, setErrors, setValues, formValidities };
}


