import { useDispatch } from 'react-redux';
import { useModalState } from './use-modal-state';

export const useAuthButton = () => {
  const {
    handlesSetShowRegisterModal,
    handlesSetSignInModal,
    handlesSetIsLogin,
  } = useModalState();

  const dispatch = useDispatch();

  const handleRegisterClick = (value: boolean) =>
    dispatch(handlesSetShowRegisterModal(value));

  const handleSignInClick = (value: boolean) =>
    dispatch(handlesSetSignInModal(value));

  const handleSignOutClick = (value: boolean) => {
    dispatch(handlesSetIsLogin(value));
    localStorage.removeItem('isLogin');
    localStorage.removeItem('email');
  };

  return {
    handleRegisterClick,
    handleSignInClick,
    handleSignOutClick,
  };
};
