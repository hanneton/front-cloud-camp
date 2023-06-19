import { useNavigate, useLocation } from "react-router-dom";
import useFormAndValidation from "../../hooks/useFormAndValidation";
import InputMask from 'react-input-mask';
import { useContext, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Main({ errors, onChange, isValid, setValues, setIsValid }) {

    const userInfo = useContext(CurrentUserContext);

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/create')
    }

    return (
        <div className="intro-page">
            <section className="user-profile content__user-profile">
                <div className="user-profile__avatar">АИ</div>
                <div className="user-profile__info">
                    <h1 className="user-profile__name">Иван Иванов</h1>
                    <ul className="user-profile__links">
                        <a href="#" className="user-profile__link"><li>Telegram</li></a>
                        <a href="#" className="user-profile__link"><li>GitHub</li></a>
                        <a href="#" className="user-profile__link"><li>Resume</li></a>
                    </ul>
                </div>
            </section>
            <section className="intro-form content__intro-form">
                <form>
                    <fieldset className="input-set">
                        <h2 className="input-label intro-form__input-label">Номер телефона</h2>
                        <InputMask
                            onChange={onChange}
                            value={userInfo["phone-number"]}
                            required
                            className="input intro-form__input"
                            name="phone-number"
                            mask={"+7\ (999) 999-99-99"}
                            placeholder="+7 999 999-99-99"
                            maskChar=""
                            alwaysShowMask={false}
                        />
                        <p className={`tip ${errors["phone-number"] && "tip_active"}`}>{"Tip" && errors["phone-number"]}</p>
                        <h2 className="input-label intro-form__input-label">Email</h2>
                        <input
                            minLength={3}
                            required
                            type="email"
                            className="input intro-form__input"
                            placeholder="tim.jennings@example.com"
                            value={userInfo["email"]}
                            onChange={onChange}
                            name="email"
                        />
                        <p className={`tip ${errors["email"] && "tip_active"}`}>{"Tip" && errors["email"]}</p>
                    </fieldset>

                </form>
                <button disabled={isValid ? false : true} onClick={handleClick} className={`button intro-form__button ${!isValid && 'button_inactive'}`}>Начать</button>
            </section>
        </div>
    )
}

export default Main;