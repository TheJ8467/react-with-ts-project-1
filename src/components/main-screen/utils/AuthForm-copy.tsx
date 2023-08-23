import { useState, useRef, ReactNode } from 'react';
import { useModalState } from '../../../hooks/use-modal-state';
import { AuthProps } from '../../../interfaces/props/AuthProps';
import ActionButton from './buttons/ActionButton';
import { useWindow } from '../../../hooks/use-window';
import Keyboard from 'react-simple-keyboard';

export const AuthForm: React.FC<AuthProps> = ({
  action,
  handleEmailChange,
  inputEmail,
  handlePasswordChange,
  password,
  handleConfirmPasswordChange,
  confirmPassword,
  // add keyboard feature
  placeholder,
  // add keyboard feature
}) => {
  const { showRegisterModal, handleSetPasswordModal, showPasswordModal } =
    useModalState();
  const [keyboardInput, setKeyboardInput] = useState('');
  const [layout, setLayout] = useState('default');
  const { windowWidth } = useWindow();
  const keyboard = useRef<any>();

  const onChange = (input: any) => {
    setKeyboardInput(input);
    console.log('Input changed', input);
  };

  const handleShift = () => {
    const newLayoutName = layout === 'default' ? 'shift' : 'default';
    setLayout(newLayoutName);
  };

  const onKeyPress = (button: ReactNode) => {
    console.log('Button pressed', button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === '{shift}' || button === '{lock}') handleShift();
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setKeyboardInput(input);
    keyboard.current.setKeyboardInput(input);
  };

  const InputForConfirmPassword = () => {
    if (showRegisterModal) {
      return (
        <div className="flex justify-between p-4 border border-black">
          <label className="text-sm flex items-center">Confirm password</label>
          <input
            className="w-5/12 border border-black"
            name="confirm-password"
            // Add keyboard feature
            onChange={
              showPasswordModal ? onChangeInput : handleConfirmPasswordChange
            }
            value={showPasswordModal ? keyboardInput : confirmPassword}
            placeholder={placeholder}
            // Add keyboard feature
            type="password"
            onClick={() => {
              handleSetPasswordModal(!showPasswordModal);
            }}
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
          // Add keyboard feature
          onChange={showPasswordModal ? onChangeInput : handlePasswordChange}
          value={showPasswordModal ? keyboardInput : password}
          placeholder={placeholder}
          // Add keyboard feature
          type="password"
          onClick={() => {
            handleSetPasswordModal(!showPasswordModal);
          }}
        />
      </div>
      <InputForConfirmPassword />
      {windowWidth > 555 && showPasswordModal && (
        <Keyboard
          keyboardRef={(r) => (keyboard.current = r)}
          layoutName={layout}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
      )}
      <ActionButton action={action} />
    </>
  );
};
