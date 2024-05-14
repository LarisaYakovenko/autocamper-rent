import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import sprite from '../../image/icons.svg';

const Modal = ({ onClose, children }) => {
  const handleClose = () => {
    onclose();
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onclose();
      document.body.style.overflow = 'visible';
    }
  };

  useEffect(() => {
    const handleKeydown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onClose]);

  return createPortal(
    <div onClick={handleBackdropClick}>
      <div>
        <button onClick={handleClose}>
          <svg>
            <use href={`${sprite}#close`} />
          </svg>
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;
