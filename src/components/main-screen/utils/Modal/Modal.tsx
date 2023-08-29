import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import { ModalProps } from '../../../../interfaces/props/ModalProps';

// actionBar is for close button at the bottom
// onClose is for closing by clicking outside of modal
function Modal({ onClose, children, containerId }: ModalProps) {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  let innerModal;
  innerModal = (
    <div className="z-20 fixed top-10 left-10 right-10 bottom-60 pb-4 pl-10 pr-10 bg-white min-h-500">
      <div className="flex items-start justify-center min-h-555 pt-10">
        {children}
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="z-10 fixed inset-0 bg-gray-300 opacity-80 "
      ></div>
      {innerModal}
    </div>,
    document.querySelector(`.${containerId}`)!,
  );
}

export default Modal;
