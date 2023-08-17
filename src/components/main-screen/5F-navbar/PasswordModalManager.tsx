import { FunctionComponent as FC } from 'react';
import { ModalCompProps } from '../../../interfaces/props/ModalCompProps';
import { useModalState } from '../../../hooks/use-modal-state';
import PasswordModal from '../utils/Modal/PasswordModal';
import PasswordModalPage from '../../pages/PasswordModalPage';

const PasswordModalManager: FC<ModalCompProps> = ({}) => {
  const { handleSetPasswordModal } = useModalState();

  const handleClose = () => {
    handleSetPasswordModal(false);
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
    <PasswordModal
      onClose={handleClose}
      actionBar={actionBar}
      containerId="password-modal"
    >
      <PasswordModalPage />
    </PasswordModal>
  );

  return <div>{modal}</div>;
};

export default PasswordModalManager;
