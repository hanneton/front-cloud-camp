import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Step2({ onChange, setValues }) {
    const userInfo = useContext(CurrentUserContext);
    const [advantages, setAdvantages] = useState(userInfo["advantages"]);
    const [checkboxValues, setCheckboxValues] = useState(userInfo["checkbox"])

    useEffect(() => {
        setValues({ ...userInfo, "advantages": advantages, "checkbox": checkboxValues })
    }, [advantages, checkboxValues])

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/create')
    }

    const handleInputChange = (e) => {
        let newAdvantages = [...advantages];
        newAdvantages[e.target.getAttribute("keyprop")] = e.target.value;
        setAdvantages(newAdvantages);
    }

    const handleNextClick = () => {
        navigate('/create/step-3')
    }

    const handleAddInputClick = () => {
        setAdvantages([...advantages, ''])
    }

    const handleRemoveInputClick = (e) => {
        setAdvantages((advantages) => {
            return advantages.filter((el, index) => {
                return index !== Number(e.target.getAttribute("keyprop"));
            })
        })
    }

    const handleCheckboxClick = (e) => {
        if (e.target.checked) {
            if (!checkboxValues.includes(e.target.value)) {
                setCheckboxValues([...checkboxValues, e.target.value])
            }
        }
        else {
            setCheckboxValues(checkboxValues.filter(el => {
                return el !== e.target.value
            }))
        }

    }

    return (
        <div className="step-page">
            <div className="progress-bar progress-bar_1">
                <div className="progress-bar__point progress-bar__point_blue progress-bar__point_checkmark">
                </div>
                <div className="progress-bar__point progress-bar__point_blue progress-bar__point_active">
                </div>
                <div className="progress-bar__point">
                </div>
            </div>
            <div className="progress-bar__steps">
                <span className="progress-bar__num progress-bar__num_active">1</span>
                <span className="progress-bar__num progress-bar__num_active">2</span>
                <span className="progress-bar__num">3</span>
            </div>
            <form className="stepform">
                <h2 className="input-label stepform__input-label">Advantages</h2>
                <fieldset className="input-set">
                    {advantages.map((advantage, index) => {
                        return (
                            <div key={index} className="input-container">
                                <input keyprop={index} onChange={handleInputChange} value={advantage} placeholder="Placeholder" className="input stepform__input" />
                                <button keyprop={index} onClick={handleRemoveInputClick} type="button" className="remove-button"></button>
                            </div>
                        )
                    })}
                </fieldset>
                <button type="button" onClick={handleAddInputClick} className="add-button"></button>
                <h2 className="input-label stepform__input-label">Checkbox group</h2>
                <fieldset className="checkbox-set">
                    <label className="checkbox-set__label">

                        <input checked={checkboxValues.includes("1") || ""} onChange={handleCheckboxClick} value="1" className="checkbox-set__item" type="checkbox"></input>1
                    </label>
                    <label className="checkbox-set__label">
                        <input checked={checkboxValues.includes("2") || ""} onChange={handleCheckboxClick} value="2" className="checkbox-set__item" type="checkbox"></input>2
                    </label>
                    <label className="checkbox-set__label">
                        <input checked={checkboxValues.includes("3") || ""} onChange={handleCheckboxClick} value="3" className="checkbox-set__item" type="checkbox"></input>3
                    </label>
                </fieldset>
                <h2 className="input-label stepform__input-label">Radio group</h2>
                <fieldset className="radio-set">
                    <label className="checkbox-set__label"><input checked={userInfo["radio"] === "1" || ""} onChange={onChange} value={1} name="radio" className="radio-set__item" type="radio"></input>1</label>
                    <label className="checkbox-set__label"><input checked={userInfo["radio"] === "2" || ""} onChange={onChange} value={2} name="radio" className="radio-set__item" type="radio"></input>2</label>
                    <label className="checkbox-set__label"><input checked={userInfo["radio"] === "3" || ""} onChange={onChange} value={3} name="radio" className="radio-set__item" type="radio"></input>3</label>
                </fieldset>
            </form>
            <div className="buttons-container">
                <button onClick={handleBackClick} className="button button_back">Назад</button>
                <button onClick={handleNextClick} className="button">Далее</button>
            </div>
        </div >
    )
}

export default Step2;