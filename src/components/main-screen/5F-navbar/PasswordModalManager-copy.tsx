import { FunctionComponent as FC, ReactNode, useRef, useState } from 'react';
import { useModalState } from '../../../hooks/use-modal-state';
import { AuthProps } from '../../../interfaces/props/AuthProps';
import Modal from '../utils/Modal/Modal';

const PasswordModalManager: FC<AuthProps> = ({}) => {
  const { handleSetPasswordModal, showPasswordModal } = useModalState();

  const handleClose = () => {
    handleSetPasswordModal(!showPasswordModal);
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
    <Modal
      onClose={handleClose}
      actionBar={actionBar}
      containerId="password-modal"
    >
      ''
    </Modal>
  );

  return <div>{modal}</div>;
};

export default PasswordModalManager;
