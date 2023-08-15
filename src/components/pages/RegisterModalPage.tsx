/* eslint-disable @typescript-eslint/no-unused-vars */

import { FunctionComponent as FC } from 'react';
import { useAuth } from '../../hooks/use-auth';
import { AuthForm } from '../main-screen/utils/AuthForm';
import { AuthProps } from '../../interfaces/props/AuthProps';

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
