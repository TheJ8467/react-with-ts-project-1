import { FunctionComponent as FC } from 'react';
import Modal from '../utils/Modal/Modal';
import RegisterModalPage from '../../pages/RegisterModalPage';
import { ModalCompProps } from '../../../interfaces/props/ModalCompProps';
import { useModalState } from '../../../hooks/use-modal-state';

const RegisterManager: FC<ModalCompProps> = ({}) => {
  const { showRegisterModal, handlesSetShowRegisterModal } = useModalState();

  const handleClose = () => {
    handlesSetShowRegisterModal(!showRegisterModal);
  };

  // this is close button at the bottom
  const actionBar = (
    <div>
      <button
        onClick={handleClose}
        className="border rounded-xl bg-red-300 p-2"
      >
        Close
      </button>
    </div>
  );

  // we will render this, based on state of showModal
  const modal = (
    <Modal onClose={handleClose} containerId="register-page">
      <RegisterModalPage />
    </Modal>
  );

  return <div>{showRegisterModal && modal}</div>;
};

export default RegisterManager;
