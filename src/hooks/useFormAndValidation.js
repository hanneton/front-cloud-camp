import { useState, useCallback } from 'react';

export default function useFormAndValidation(inputValues = {}) {
  const [values, setValues] = useState(inputValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIsValid(e.target.closest('form').checkValidity());
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: e.target.validationMessage });
  };

  const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid);
  }, [setValues, setErrors, setIsValid]);

  return { values, handleChange, errors, setErrors, isValid, resetForm, setValues, setIsValid };
}

// (event) => setEmail(event.target.value, () => {
//   if (event.target.checkValidity()) {
//     setButtonDisabled(false);
//   } else {
//     setButtonDisabled(true);
//   }
// })
