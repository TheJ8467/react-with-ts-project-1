/* eslint-disable @typescript-eslint/no-unused-vars */

import { FunctionComponent as FC } from 'react';
import { useAuth } from '../../hooks/use-auth';
import { AuthForm } from '../main-screen/utils/AuthForm';
import { AuthProps } from '../../interfaces/props/AuthProps';
import { useWindow } from '../../hooks/use-window';
import { useModalState } from '../../hooks/use-modal-state';
import PasswordModalManager from '../main-screen/5F-navbar/PasswordModalManager';

// This page is bridge component between modal module and Register modal page component

const RegisterModalPage: FC<AuthProps> = ({}) => {
  const {
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleRegisterSubmit,
    inputEmail,
    password,
    confirmPassword,
  } = useAuth();
  const { windowWidth } = useWindow();
  const { showPasswordModal } = useModalState();

  return (
    <div>
      <form onSubmit={handleRegisterSubmit}>
        <AuthForm
          action={'register'}
          handleEmailChange={handleEmailChange}
          inputEmail={inputEmail}
          handlePasswordChange={handlePasswordChange}
          password={password}
          handleConfirmPasswordChange={handleConfirmPasswordChange}
          confirmPassword={confirmPassword}
        />
      </form>
      {windowWidth > 555 && showPasswordModal && <PasswordModalManager />}
    </div>
  );
};

export default RegisterModalPage;
