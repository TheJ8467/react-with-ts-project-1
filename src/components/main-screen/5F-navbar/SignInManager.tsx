import { FunctionComponent as FC } from 'react';
import Modal from '../utils/Modal/Modal';
import SignInModalPage from '../../pages/SignInModalPage';
import { ModalCompProps } from '../../../interfaces/props/ModalCompProps';
import { useModalState } from '../../../hooks/use-modal-state';

const SignInManager: FC<ModalCompProps> = ({}) => {
  const { showSignInModal, handlesSetSignInModal } = useModalState();

  const handleClose = () => {
    handlesSetSignInModal(!showSignInModal);
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
      containerId="sign-in-page"
    >
      <SignInModalPage />
    </Modal>
  );

  return <div>{showSignInModal && modal}</div>;
};

export default SignInManager;
