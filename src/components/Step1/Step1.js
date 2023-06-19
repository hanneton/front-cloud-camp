import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import useFormAndValidation from "../../hooks/useFormAndValidation";

function Step1({ onChange, errors, isValid, setValues, setIsValid }) {
    const navigate = useNavigate();
    const userInfo = useContext(CurrentUserContext);

    console.log(isValid)

    useEffect(() => {
        setValues({ ...userInfo })
    }, []);

    const handleBackClick = () => {
        navigate('/')
    }

    const handleNextClick = () => {
        navigate('/create/step-2')
    }
    return (
        <div className="step-page">
            <div className="progress-bar">
                <div className="progress-bar__point progress-bar__point_blue progress-bar__point_active">
                </div>
                <div className="progress-bar__point">
                </div>
                <div className="progress-bar__point">
                </div>
            </div>
            <div className="progress-bar__steps">
                <span className="progress-bar__num progress-bar__num_active">1</span>
                <span className="progress-bar__num">2</span>
                <span className="progress-bar__num">3</span>
            </div>
            <form className="stepform">
                <fieldset className="input-set">
                    <h2 className="input-label stepform__input-label">Nickname</h2>
                    <input
                        onChange={onChange}
                        required
                        name="nickname"
                        maxLength={30}
                        pattern="^[a-zA-Z0-9]+$"
                        placeholder="Placeholder"
                        className="input stepform__input"
                        value={userInfo["nickname"]}
                    />
                    <p className={`tip ${errors["nickname"] && "tip_active"}`}>{"Tip" && errors["nickname"]}</p>
                    <h2 className="input-label stepform__input-label">Name</h2>
                    <input
                        onChange={onChange}
                        name="name"
                        required
                        pattern="^[a-zA-Z]+$"
                        placeholder="Placeholder"
                        className="input stepform__input"
                        maxLength={50}
                        value={userInfo["name"]}
                    />
                    <p className={`tip ${errors["name"] && "tip_active"}`}>{"Tip" && errors["name"]}</p>
                    <h2 className="input-label stepform__input-label">Surname</h2>
                    <input
                        onChange={onChange}
                        name="surname"
                        placeholder="Placeholder"
                        className="input stepform__input"
                        required
                        pattern="^[a-zA-Z]+$"
                        maxLength={50}
                        value={userInfo["surname"]}
                    />
                    <p className={`tip ${errors["surname"] && "tip_active"}`}>{"Tip" && errors["surname"]}</p>
                </fieldset>
                <fieldset className="input-set">
                    <h2 className="input-label stepform__input-label">Sex</h2>
                    <div className="select-container">
                        <select name="sex" onChange={onChange} className="input stepform__input" defaultValue="Не выбрано">
                            <option className="input__option" disabled value="Не выбрано">Не выбрано</option>
                            <option className="input__option" value="man">man</option>
                            <option className="input__option" value="woman">woman</option>
                        </select>
                    </div>

                </fieldset>
            </form>
            <div className="buttons-container">
                <button onClick={handleBackClick} className="button button_back">Назад</button>
                <button disabled={isValid ? null : true} onClick={handleNextClick} className={`button intro-form__button ${!isValid && 'button_inactive'}`}>Далее</button>
            </div>
        </div >
    )
}

export default Step1;