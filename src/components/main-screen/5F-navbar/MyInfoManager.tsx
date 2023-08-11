import { FunctionComponent as FC } from 'react';
import Modal from '../utils/Modal/Modal';
import { ModalCompProps } from '../../../interfaces/props/ModalCompProps';
import MyInfoModalPage from '../../pages/MyInfoModalPage';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { useModalState } from '../../../hooks/use-modal-state';

//this page shows modal version for user authentication.
const MyinfoManager: FC<ModalCompProps> = ({}) => {
  const {
    showModal,
    showSignInModal,
    showRegisterModal,
    handlesSetShowModal,
    handlesSetSignInModal,
    handlesSetShowRegisterModal,
    isLogin,
  } = useModalState();
  const handleClose = () => {
    handlesSetShowModal(!showModal);
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
      containerId="my-info-page"
    >
      <MyInfoModalPage
        isLogin={isLogin}
        handlesSetShowRegisterModal={handlesSetShowRegisterModal}
        showRegisterModal={showRegisterModal}
        showSignInModal={showSignInModal}
        handlesSetSignInModal={handlesSetSignInModal}
      />
    </Modal>
  );

  return <div>{showModal && modal}</div>;
};

export default MyinfoManager;
