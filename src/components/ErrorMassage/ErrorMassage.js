import './ErrorMassage.scss'
import fail from '../../images/fail.svg';
import React from 'react';

export default function InfoTooltip({ name, isOpen, onClose,isSuccess }) {

  function handleEscClose(evt) {
    if (evt.key === 'Escape') {
      onClose();
    };
  }

  function handleOverlayClose(evt) {
    if (evt.target.classList.contains('popup')) {
      onClose();
    };
  }

  React.useEffect(() => {
    document.addEventListener('keyup', handleEscClose);
    return () => {
      document.removeEventListener('keyup', handleEscClose);
    }
  }, [isOpen]);


  return (
    <div className={`popup ${isOpen ? ('popup_opened') : ''}`} onClick={handleOverlayClose}>
      <div className="popup__container popup__container_type_info">
        <button className="popup__close-button" type="button" onClick={onClose} />
        <img className="popup__img"  src={fail} alt='Инфо-изображение'/>
        <h2 className="popup__title ">Что-то пошло не так! Попробуйте ещё раз.</h2>
      </div>
    </div>
  )
}

