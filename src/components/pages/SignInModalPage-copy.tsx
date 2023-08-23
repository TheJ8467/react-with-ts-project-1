import { FunctionComponent as FC } from 'react';
import { useAuth } from '../../hooks/use-auth';
import { AuthForm } from '../main-screen/utils/AuthForm-copy';
import { AuthProps } from '../../interfaces/props/AuthProps';
import { useModalState } from '../../hooks/use-modal-state';
import PasswordModalManager from '../main-screen/5F-navbar/PasswordModalManager';
import { useWindow } from '../../hooks/use-window';
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
  const { windowWidth } = useWindow();
  return (
    <div>
      <form onSubmit={handleSignInSubmit}>
        <AuthForm
          action={'Sign in'}
          handleEmailChange={handleEmailChange}
          inputEmail={inputEmail}
          handlePasswordChange={handlePasswordChange}
          password={password}
          placeholder={'Press here'}
        />
      </form>
      {/* {windowWidth > 555 && showPasswordModal && <PasswordModalManager />} */}
    </div>
  );
};

export default SignInModalPage;
