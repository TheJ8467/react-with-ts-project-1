/* eslint-disable @typescript-eslint/no-unused-vars */

import { FunctionComponent as FC, useEffect } from 'react';
import { ModalCompProps } from '../../interfaces/props/ModalCompProps';
import { useModalState } from '../../hooks/use-modal-state';
import { useWindow } from '../../hooks/use-window';
import SignedInButton from '../main-screen/utils/buttons/SignedInButton';
import SignOutButton from '../main-screen/utils/buttons/SignOutButton';
import LoginStatus from '../main-screen/utils/LoginStatus';
import { useAuthButton } from '../../hooks/use-auth-button';

// This page is in progress.
// This page will manage sign in, sign out, register

const MyInfoModalPage: FC<ModalCompProps> = ({}) => {
  const { handlesSetIsLogin, handleSetEmail } = useModalState();

  const { handleRegisterClick, handleSignInClick, handleSignOutClick } =
    useAuthButton();

  return (
    <div className="flex flex-col items-center">
      <p className="p-4 text-center">
        <LoginStatus
          handlesSetIsLogin={handlesSetIsLogin}
          handleSetEmail={handleSetEmail}
        />
      </p>
      <SignOutButton handleSignOutClick={() => handleSignOutClick(false)} />
      <SignedInButton
        handleRegisterClick={() => handleRegisterClick(true)}
        handleSignInClick={() => handleSignInClick(true)}
      />
    </div>
  );
};

export default MyInfoModalPage;
