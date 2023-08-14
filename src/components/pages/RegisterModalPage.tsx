/* eslint-disable @typescript-eslint/no-unused-vars */

import { FunctionComponent as FC } from 'react';
import { ModalCompProps } from '../../interfaces/props/ModalCompProps';
import { useAuth } from '../../hooks/use-auth';
import { AuthForm } from '../main-screen/utils/AuthForm';

// This page is bridge component between modal module and Register modal page component

const RegisterModalPage: FC<ModalCompProps> = ({}) => {
  const {
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleRegisterSubmit,
    inputEmail,
    password,
    confirmPassword,
  } = useAuth();

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
    </div>
  );
};

export default RegisterModalPage;
