import { FunctionComponent as FC, useState } from 'react';
import { useGetUserInfoQuery } from '../../store';
import { ModalCompProps } from '../../interfaces/props/ModalCompProps';
import { useModalState } from '../../hooks/use-modal-state';
import CryptoJS from 'crypto-js';
import { useWindow } from '../../hooks/use-window';

const SignInModalPage: FC<ModalCompProps> = ({}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {
    showSignInModal,
    handlesSetSignInModal,
    handlesSetIsLogin,
    handleSetEmail,
  } = useModalState();
  const { windowHeight } = useWindow();
  const { data: userInfo } = useGetUserInfoQuery({});

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setPassword(e.target.value);
  };

  const hashPassword = (pwd: any) => {
    return CryptoJS.SHA256(pwd).toString();
  };

  const handleSignInSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const hashedPassword = hashPassword(password);
    try {
      if (
        userInfo.some(
          (user: { email: any; hashedPassword: any }) =>
            user.email === email && user.hashedPassword === hashedPassword,
        )
      ) {
        localStorage.setItem('isLogin', 'true');
        localStorage.setItem('email', email);
        handleSetEmail(email);
        setEmail('');
        setPassword('');
        handlesSetIsLogin(true);
        handlesSetSignInModal(!showSignInModal);
      } else {
        alert('Email and password may be in correct');
      }
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  let buttons;

  if (windowHeight > 750) {
    buttons = (
      <button className="border rounded-lg border-black p-2 mt-2 float-right">
        Sign in
      </button>
    );
  } else {
    buttons = (
      <div className="mt-4">
        <button
          onClick={() => handlesSetSignInModal(false)}
          className="border rounded-lg bg-red-300 p-2 mt-2 w-3/12"
        >
          Close
        </button>
        <button className="border rounded-lg border-black p-2 mt-2 float-right">
          Sign in
        </button>
      </div>
    );
  }
  return (
    <div>
      <form onSubmit={handleSignInSubmit}>
        <div className="flex justify-between p-4 border border-black">
          <label>Email</label>
          <input
            className="w-5/12 border border-black"
            name="email"
            onChange={handleEmailChange}
            value={email}
          />
        </div>
        <div className="flex justify-between p-4 border border-black">
          <label>Password</label>
          <input
            className="w-5/12 border border-black"
            name="password"
            onChange={handlePasswordChange}
            value={password}
            type="password"
          />
        </div>
        {buttons}
      </form>
    </div>
  );
};

export default SignInModalPage;
