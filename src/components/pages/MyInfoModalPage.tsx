/* eslint-disable @typescript-eslint/no-unused-vars */

import { FunctionComponent as FC, useEffect } from 'react';
import { ModalCompProps } from '../../interfaces/props/ModalCompProps';
import { useModalState } from '../../hooks/use-modal-state';
import { useWindow } from '../../hooks/use-window';

// This page is in progress.
// This page will manage sign in, sign out, register

const MyInfoModalPage: FC<ModalCompProps> = ({}) => {
  const {
    isLogin,
    email,
    handlesSetShowModal,
    handlesSetShowRegisterModal,
    handlesSetSignInModal,
    handlesSetIsLogin,
    handleSetEmail,
  } = useModalState();
  const { windowHeight } = useWindow();

  const handleRegisterClick = () => {
    handlesSetShowRegisterModal(true);
  };

  const handleSignInClick = () => {
    handlesSetSignInModal(true);
  };

  const handleSignOutClick = () => {
    handlesSetIsLogin(false);
    localStorage.removeItem('isLogin');
    localStorage.removeItem('email');
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

  if (isLogin && windowHeight > 750) {
    logoutButton = (
      <button
        className="border rounded-xl p-2 bg-yellow-400 m-4"
        onClick={handleSignOutClick}
      >
        Sign out
      </button>
    );
  } else if (isLogin && windowHeight <= 750) {
    logoutButton = (
      <div>
        <button
          className="border rounded-xl p-2 bg-yellow-400 m-4"
          onClick={handleSignOutClick}
        >
          Sign out
        </button>
        <button
          onClick={() => handlesSetShowModal(false)}
          className="border rounded-lg bg-red-300 p-2 mt-2 w-auto"
        >
          Close
        </button>
      </div>
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
