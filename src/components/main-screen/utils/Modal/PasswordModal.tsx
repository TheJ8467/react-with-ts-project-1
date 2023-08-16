import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import { ModalProps } from '../../../../interfaces/props/ModalProps';
import { useWindow } from '../../../../hooks/use-window';

function PasswordModal({
  onClose,
  children,
  actionBar,
  containerId,
}: ModalProps) {
  const { windowHeight } = useWindow();

  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  let innerModal;
  if (windowHeight > 750) {
    innerModal = (
      <div className="z-20 fixed top-20 left-10 right-10 bottom-60 pb-20 pl-10 pr-10 opacity-50">
        <div className="flex items-center justify-center h-full">
          {children}
        </div>
        <div className="flex justify-end">{actionBar}</div>
      </div>
    );
  } else {
    innerModal = (
      <div className="z-20 fixed top-120 left-10 right-10 bottom-10 pb-4 pl-10 pr-10 ">
        <div className="flex items-center justify-center h-full">
          {children}
        </div>
      </div>
    );
  }

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="z-10 fixed inset-0 bg-black opacity-80"
      ></div>
      {innerModal}
    </div>,
    document.querySelector(`.${containerId}`)!,
  );
}

export default PasswordModal;
