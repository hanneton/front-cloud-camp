import { useNavigate } from "react-router-dom"

export function InfoTooltip(props) {
    const navigate = useNavigate();
    const handleClick = () => {
        props.onClose();
        navigate('/');
    }
    return (
        <div className={`popup ${props.isOpen && "popup_opened"}`}>
            <div className="popup__container">
                <div className="popup__wrapper">
                    <h2 className={`popup__heading ${props.icon && "popup__heading_error"}`}>{!props.icon
                        ? `Форма успешно отправлена`
                        : `Ошибка`}
                    </h2>
                    {props.icon && <button onClick={props.onClose} className="popup__close-button" type="button" aria-label="кнопка закрыть"></button>}
                </div>
                <div className={`popup__icon ${!props.icon && 'popup__icon_success'}`}></div>
                {!props.icon ? <button onClick={handleClick} type="button" className="button popup__button">На главную</button>
                    : <button onClick={props.onClose} type="button" className="button popup__button popup__button_close">Закрыть</button>}
            </div>
        </div>
    )
}

