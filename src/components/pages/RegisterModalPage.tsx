/* eslint-disable @typescript-eslint/no-unused-vars */

import { FunctionComponent as FC, useState } from 'react';
import { useRegisterMutation } from '../../store';
import { ModalCompProps } from '../../interfaces/props/ModalCompProps';
import CryptoJS from 'crypto-js';
import { useModalState } from '../../hooks/use-modal-state';

// This page manages register

const RegisterModalPage: FC<ModalCompProps> = ({}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');

  const { handlesSetShowRegisterModal } = useModalState();

  const [register] = useRegisterMutation();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setConfirmPassword(e.target.value);
  };

  const hashPassword = (pwd: any) => {
    return CryptoJS.SHA256(pwd).toString();
  };

  const handleRegisterSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== ConfirmPassword) {
      alert('Passwords do not match');
    } else {
      const hashedPassword = hashPassword(password);
      register({ email, hashedPassword });
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      handlesSetShowRegisterModal(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleRegisterSubmit}>
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
        <div className="flex justify-between p-4 border border-black">
          <label>Confirm password</label>
          <input
            className="w-5/12 border border-black"
            name="confirm-password"
            onChange={handleConfirmPasswordChange}
            value={ConfirmPassword}
            type="password"
          />
        </div>
        <button className="border rounded-lg border-black p-2 mt-2 float-right">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterModalPage;
