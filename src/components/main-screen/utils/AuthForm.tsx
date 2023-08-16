import { useModalState } from '../../../hooks/use-modal-state';
import { AuthProps } from '../../../interfaces/props/AuthProps';
import ActionButton from './buttons/ActionButton';

export const AuthForm: React.FC<AuthProps> = ({
  action,
  handleEmailChange,
  inputEmail,
  handlePasswordChange,
  password,
  handleConfirmPasswordChange,
  confirmPassword,
}) => {
  const { showRegisterModal, showPasswordModal, handleSetPasswordModal } =
    useModalState();

  const InputForConfirmPassword = () => {
    if (showRegisterModal) {
      return (
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
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <div className="flex justify-between p-4 border border-black">
        <label>Email</label>
        <input
          className="w-5/12 border border-black"
          name="email"
          onChange={handleEmailChange}
          value={inputEmail}
          formTarget="/src/components/main-screen/utils/AuthForm.tsx"
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
          onClick={() => {
            handleSetPasswordModal(true);
            console.log(showPasswordModal);
          }}
        />
      </div>
      <InputForConfirmPassword />
      <ActionButton action={action} />
    </>
  );
};
