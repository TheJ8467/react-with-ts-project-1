/* eslint-disable @typescript-eslint/no-unused-vars */

import { FunctionComponent as FC, useState } from 'react';
import { useRegisterMutation } from '../../store';
import { ModalCompProps } from '../../interfaces/props/ModalCompProps';
import CryptoJS from 'crypto-js';
import { useModalState } from '../../hooks/use-modal-state';
import { useWindow } from '../../hooks/use-window';
import ActionButton from '../main-screen/utils/buttons/ActionButton';
import { useRegister } from '../../hooks/use-register';

// This page manages register

const RegisterModalPage: FC<ModalCompProps> = ({}) => {
  const { handlesSetShowRegisterModal } = useModalState();
  const {
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleRegisterSubmit,
    email,
    password,
    confirmPassword,
  } = useRegister();

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
          <label className="text-sm flex items-center">Confirm password</label>
          <input
            className="w-5/12 border border-black"
            name="confirm-password"
            onChange={handleConfirmPasswordChange}
            value={confirmPassword}
            type="password"
          />
        </div>
        <ActionButton
          handlesSetShowRegisterModal={() => handlesSetShowRegisterModal(false)}
          action={'Register'}
        />
      </form>
    </div>
  );
};

export default RegisterModalPage;
