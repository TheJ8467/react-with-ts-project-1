import { FunctionComponent as FC, ReactNode, useRef, useState } from 'react';
import { ModalCompProps } from '../../../interfaces/props/ModalCompProps';
import { useModalState } from '../../../hooks/use-modal-state';
import PasswordModal from '../utils/Modal/PasswordModal';
import PasswordModalPage from '../../pages/PasswordModalPage';
import Keyboard from 'react-simple-keyboard';
import { AuthProps } from '../../../interfaces/props/AuthProps';

const PasswordModalManager: FC<AuthProps> = ({ keyboardInput }) => {
  const { handleSetPasswordModal, showPasswordModal } = useModalState();
  const [layout, setLayout] = useState('default');
  const onChange = (input: any) => {
    // setKeyboardInput(keyboardInput);
    console.log('Input changed', input);
  };
  // const [keyboardInput, setKeyboardInput] = useState('');

  const handleShift = () => {
    const newLayoutName = layout === 'default' ? 'shift' : 'default';
    setLayout(newLayoutName);
  };
  const handleClose = () => {
    handleSetPasswordModal(!showPasswordModal);
  };

  const onKeyPress = (button: ReactNode) => {
    console.log('Button pressed', button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === '{shift}' || button === '{lock}') handleShift();
  };

  // this is close button at the bottom
  const actionBar = (
    <div>
      <button
        onClick={handleClose}
        className="border rounded-xl bg-red-300 p-2"
      >
        Close
      </button>
    </div>
  );
  const keyboard = useRef<any>();

  // we will render this, based on state of showModal
  const modal = (
    <PasswordModal
      onClose={handleClose}
      actionBar={actionBar}
      containerId="password-modal"
    >
      {/* <PasswordModalPage
        layout={layout}
        onChange={onChange}
        onKeyPress={onKeyPress}
      /> */}
      <Keyboard
        keyboardRef={(r) => (keyboard.current = r)}
        layoutName={layout}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </PasswordModal>
  );

  return <div>{modal}</div>;
};

export default PasswordModalManager;
