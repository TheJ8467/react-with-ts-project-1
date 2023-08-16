import { FunctionComponent as FC } from 'react';
import { ModalCompProps } from '../../interfaces/props/ModalCompProps';
import { useAuth } from '../../hooks/use-auth';
import { AuthForm } from '../main-screen/utils/AuthForm';
import { AuthProps } from '../../interfaces/props/AuthProps';
import { useModalState } from '../../hooks/use-modal-state';
import PasswordModalManager from '../main-screen/5F-navbar/PasswordModalManager';
// This page is bridge component between modal module and sign in modal page component

const SignInModalPage: FC<AuthProps> = ({}) => {
  const {
    handleEmailChange,
    handlePasswordChange,
    handleSignInSubmit,
    password,
    inputEmail,
  } = useAuth();
  const { showPasswordModal } = useModalState();
  return (
    <div>
      <form onSubmit={handleSignInSubmit}>
        <AuthForm
          action={'Sign in'}
          handleEmailChange={handleEmailChange}
          inputEmail={inputEmail}
          handlePasswordChange={handlePasswordChange}
          password={password}
        />
      </form>
      {showPasswordModal && <PasswordModalManager />}
    </div>
  );
};

export default SignInModalPage;
