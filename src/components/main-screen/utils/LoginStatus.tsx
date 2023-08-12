import { useEffect } from 'react';
import { LoginStatusProps } from '../../../interfaces/props/LoginStatusProps';
import { useModalState } from '../../../hooks/use-modal-state';

const LoginStatus: React.FC<LoginStatusProps> = ({
  handlesSetIsLogin,
  handleSetEmail,
}) => {
  const { isLogin, email } = useModalState();
  useEffect(() => {
    const isLogin = localStorage.getItem('isLogin');
    const email = localStorage.getItem('email');

    if (isLogin === 'true' && email) {
      handlesSetIsLogin(true);
      handleSetEmail(email);
    }
  }, []);

  return <p>{isLogin ? `Welcome ${email}` : 'Guest'}</p>;
};

export default LoginStatus;
