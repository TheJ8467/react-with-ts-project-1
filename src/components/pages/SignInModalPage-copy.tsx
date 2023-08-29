import { FunctionComponent as FC } from 'react';
import { useAuth } from '../../hooks/use-auth';
import { AuthForm } from '../main-screen/utils/AuthForm-copy';
import { AuthProps } from '../../interfaces/props/AuthProps';
// This page is bridge component between modal module and sign in modal page component

const SignInModalPage: FC<AuthProps> = ({}) => {
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
          placeholder={'Press here'}
        />
      </form>
    </div>
  );
};

export default SignInModalPage;
