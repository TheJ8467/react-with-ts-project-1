/* eslint-disable @typescript-eslint/no-unused-vars */

import { FunctionComponent as FC } from 'react';
import { ModalCompProps } from '../../interfaces/props/ModalCompProps';
import { useModalState } from '../../hooks/use-modal-state';
import GuestButtons from '../main-screen/utils/buttons/GuestButtons';
import SignedUserButton from '../main-screen/utils/buttons/SignedUserButton';
import LoginStatus from '../main-screen/utils/LoginStatus';
import { useAuthButton } from '../../hooks/use-auth-button';

// This page is bridge component between modal module and My info modal page component

const MyInfoModalPage: FC<ModalCompProps> = ({}) => {
  const { handlesSetIsLogin, handleSetEmail } = useModalState();

  const { handleRegisterClick, handleSignInClick, handleSignOutClick } =
    useAuthButton();

  return (
    <div className="flex flex-col items-center w-full">
      <p className="p-4 text-center">
        {/* LoginStatus renders welcome message to user */}
        <LoginStatus
          handlesSetIsLogin={handlesSetIsLogin}
          handleSetEmail={handleSetEmail}
        />
      </p>
      {/* below 2 buttons are rendered conditionally */}
      <SignedUserButton handleSignOutClick={() => handleSignOutClick(false)} />
      <GuestButtons
        handleRegisterClick={() => handleRegisterClick(true)}
        handleSignInClick={() => handleSignInClick(true)}
      />
    </div>
  );
};

export default MyInfoModalPage;
