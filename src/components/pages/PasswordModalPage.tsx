import { FunctionComponent as FC } from 'react';
import { ModalCompProps } from '../../interfaces/props/ModalCompProps';
import { useAuth } from '../../hooks/use-auth';
import { AuthForm } from '../main-screen/utils/AuthForm';
import { AuthProps } from '../../interfaces/props/AuthProps';
import { useModalState } from '../../hooks/use-modal-state';
import PasswordModalManager from '../main-screen/5F-navbar/PasswordModalManager';
import KeyboardReact from 'react-simple-keyboard';

const PasswordModalPage: FC<AuthProps> = ({}) => {
  return (
    <div className="grid grid-cols-3">
      <div className="border-4 p-4"></div>
      <div className="border-4 p-4"></div>
      <div className="border-4 p-4"></div>
      <div className="border-4 p-4"></div>
    </div>
  );
};

export default PasswordModalPage;
