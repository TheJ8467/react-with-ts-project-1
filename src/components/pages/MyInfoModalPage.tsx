/* eslint-disable @typescript-eslint/no-unused-vars */

import { FunctionComponent as FC, useEffect } from 'react';
import { ModalCompProps } from '../../interfaces/props/ModalCompProps';
import { useModalState } from '../../hooks/use-modal-state';

// This page is in progress.
// This page will manage sign in, sign out, register

const MyInfoModalPage: FC<ModalCompProps> = ({}) => {
  const {
    isLogin,
    email,
    handlesSetShowRegisterModal,
    handlesSetSignInModal,
    handlesSetIsLogin,
    handleSetEmail,
  } = useModalState();

  const handleRegisterClick = () => {
    handlesSetShowRegisterModal(true);
  };

  const handleSignInClick = () => {
    handlesSetSignInModal(true);
    handlesSetIsLogin(true);
  };

  const handleSignOutClick = () => {
    handlesSetIsLogin(false);
  };

  let loginStatus;

  useEffect(() => {
    const isLogin = localStorage.getItem('isLogin');
    const email = localStorage.getItem('email');

    if (isLogin === 'true' && email) {
      handlesSetIsLogin(true);
      handleSetEmail(email);
    }
  }, []);

  loginStatus = <p>{isLogin ? `Welcome ${email}` : 'Guest'}</p>;

  let buttonsForSignedIn;

  if (isLogin) {
    buttonsForSignedIn = null;
  } else {
    buttonsForSignedIn = (
      <div className="flex justify-between m-4">
        <button
          className="flex border rounded-xl p-2 bg-yellow-400 mr-4"
          onClick={handleSignInClick}
        >
          Sign in
        </button>
        <button
          className="flex border rounded-xl p-2 bg-blue-400"
          onClick={handleRegisterClick}
        >
          Register
        </button>
      </div>
    );
  }

  let logoutButton;

  if (isLogin) {
    logoutButton = (
      <button
        className="border rounded-xl p-2 bg-yellow-400 m-4"
        onClick={handleSignOutClick}
      >
        Sign out
      </button>
    );
  } else {
    logoutButton = null;
  }

  return (
    <div className="flex flex-col items-center">
      <p className="p-4 text-center">{loginStatus}</p>
      {logoutButton}
      {buttonsForSignedIn}
    </div>
  );
};

export default MyInfoModalPage;
