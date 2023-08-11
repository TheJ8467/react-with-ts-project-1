import { useModalState } from './use-modal-state';
import { useState } from 'react';
import { useRegisterMutation } from '../store';
import CryptoJS from 'crypto-js';

export const useRegister = () => {
  const { handlesSetShowRegisterModal } = useModalState();
  const [password, setPassword] = useState<string | undefined>(undefined);
  const [confirmPassword, setConfirmPassword] = useState<string | undefined>(
    undefined,
  );
  const [email, setEmail] = useState<string | undefined>(undefined);
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
    if (password !== confirmPassword) {
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

  return {
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleRegisterSubmit,
    email,
    password,
    confirmPassword,
  };
};
