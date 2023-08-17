import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import { ModalProps } from '../../../../interfaces/props/ModalProps';

function PasswordModal({ onClose, children, containerId }: ModalProps) {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  let innerModal;
  innerModal = (
    <div className="z-20 fixed top-80 left-10 right-10 bottom-10 pb-4 min-h-250 ">
      <div className="flex items-center justify-center h-full">{children}</div>
    </div>
  );

  return ReactDOM.createPortal(
    <div>
      <div onClick={onClose} className="z-20 fixed inset-0 opacity-80"></div>
      {innerModal}
    </div>,
    document.querySelector(`.${containerId}`)!,
  );
}

export default PasswordModal;
