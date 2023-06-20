import Main from '../Main/Main';
import './App.css';
import { useState } from 'react';
import Step1 from '../Step1/Step1';
import Step2 from '../Step2/Step2';
import Step3 from '../Step3/Step3';
import { register } from '../../utils/api';
import { Routes, Route } from 'react-router-dom';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { InfoTooltip } from '../InfoTooltip/InfoTooltip';


function App() {
  const { values, handleChange, errors, isValid, setErrors, setValues, setIsValid, formValidities } = useFormAndValidation({
    "name": "",
    "surname": "",
    "nickname": "",
    "sex": "",
    "phone-number": "",
    "email": "",
    "advantages": ["", "", ""],
    "radio": 0,
    "checkbox": [],
    "about": ""
  })

  const [isTooltipPopupOpen, setTooltipPopupOpen] = useState(false);
  const [tooltipIcon, setTooltipIcon] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    register(values)
      .then(data => {
        console.log(data);
        onSuccess();
      })
      .catch(err => {
        console.log(err);
        onError();
      })
  }

  function onSuccess() {
    setTooltipIcon(true);
    setTooltipPopupOpen(true);
  }

  function onError() {
    setTooltipPopupOpen(true);
  }

  function closePopup() {
    setTooltipPopupOpen(false);
    setTooltipIcon(false);
  }

  return (
    <div className="App">
      <div className="page">
        <main className="content">
          <CurrentUserContext.Provider value={values}>
            <Routes>
              <Route index element={<Main formValidities={formValidities} onChange={handleChange} errors={errors} />} />
              <Route path="/create" element={<Step1 formValidities={formValidities} setValues={setValues} onChange={handleChange} errors={errors} />} />
              <Route path="/create/step-2" element={<Step2 setErrors={setErrors} setValues={setValues} onChange={handleChange} errors={errors} />} />
              <Route path="/create/step-3" element={<Step3 setErrors={setErrors} onSubmit={handleSubmit} onChange={handleChange} errors={errors} />} />
            </Routes>
          </CurrentUserContext.Provider>
          <InfoTooltip onClose={closePopup} isOpen={isTooltipPopupOpen} icon={tooltipIcon} />
        </main>
      </div>
    </div>
  );
}

export default App;
