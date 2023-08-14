import { useModalState } from './use-modal-state';
import { useState } from 'react';
import { useGetUserInfoQuery, useRegisterMutation } from '../store';
import CryptoJS from 'crypto-js';

export const useAuth = () => {
  const { handlesSetShowRegisterModal } = useModalState();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const { data: userInfo } = useGetUserInfoQuery({});
  const {
    handleSetEmail,
    handlesSetIsLogin,
    handlesSetSignInModal,
    showSignInModal,
  } = useModalState();
  const [register] = useRegisterMutation();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputEmail(e.target.value);
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

  const handleRegisterSubmit = async (
    e: React.ChangeEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
    } else {
      const hashedPassword = hashPassword(password);
      register({ inputEmail, hashedPassword });
      setInputEmail('');
      setPassword('');
      setConfirmPassword('');
      handlesSetShowRegisterModal(false);
    }
  };

  const handleSignInSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const hashedPassword = hashPassword(password);
    if (
      userInfo.some(
        (user: { inputEmail: any; hashedPassword: any }) =>
          user.inputEmail === inputEmail &&
          user.hashedPassword === hashedPassword,
      )
    ) {
      localStorage.setItem('isLogin', 'true');
      localStorage.setItem('email', inputEmail);
      handleSetEmail(inputEmail);
      handlesSetIsLogin(true);
      handlesSetSignInModal(!showSignInModal);
    } else {
      alert('Email and password may be in correct');
    }
  };

  return {
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleRegisterSubmit,
    handleSignInSubmit,
    inputEmail,
    password,
    confirmPassword,
  };
};
