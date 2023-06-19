import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";


function Step3({ onChange, onSubmit }) {
    const userInfo = useContext(CurrentUserContext);

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/create/step-2')
    }

    return (
        <div className="step-page">
            <div className="progress-bar progress-bar_2">
                <div className="progress-bar__point progress-bar__point_blue progress-bar__point_checkmark">
                </div>
                <div className="progress-bar__point progress-bar__point_blue progress-bar__point_checkmark">
                </div>
                <div className="progress-bar__point progress-bar__point_blue progress-bar__point_active">
                </div>
            </div>
            <div className="progress-bar__steps">
                <span className="progress-bar__num progress-bar__num_active">1</span>
                <span className="progress-bar__num progress-bar__num_active">2</span>
                <span className="progress-bar__num progress-bar__num_active">3</span>
            </div>
            <form onSubmit={onSubmit} id="stepform" className="stepform">
                <h2 className="input-label stepform__input-label">About</h2>
                <textarea onChange={onChange} value={userInfo["about"]} maxLength={200} name="about" className="stepform__textarea"></textarea>
            </form>
            <div className="buttons-container">
                <button onClick={handleBackClick} className="button button_back">Назад</button>
                <button form="stepform" type="submit" className="button">Отправить</button>
            </div>
        </div >
    )
}

export default Step3;