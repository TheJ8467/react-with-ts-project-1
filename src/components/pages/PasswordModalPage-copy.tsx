import { FunctionComponent as FC, ReactNode, useRef, useState } from 'react';
import { AuthProps } from '../../interfaces/props/AuthProps';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

// renders on clicking password while windowWidth > 555px
const PasswordModalPage: FC<AuthProps> = ({ layout, onChange, onKeyPress }) => {
  const keyboard = useRef<any>();

  return (
    <>
      {/* <Keyboard
        keyboardRef={(r) => (keyboard.current = r)}
        layoutName={layout}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />{' '} */}
    </>
  );
};

export default PasswordModalPage;
