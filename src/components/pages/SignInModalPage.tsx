import { FunctionComponent as FC } from 'react';
import { ModalCompProps } from '../../interfaces/props/ModalCompProps';
import { useAuth } from '../../hooks/use-auth';
import { AuthForm } from '../main-screen/utils/AuthForm';

// This page is bridge component between modal module and sign in modal page component

const SignInModalPage: FC<ModalCompProps> = ({}) => {
  const {
    handleEmailChange,
    handlePasswordChange,
    handleSignInSubmit,
    password,
    inputEmail,
  } = useAuth();
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
    </div>
  );
};

export default SignInModalPage;
