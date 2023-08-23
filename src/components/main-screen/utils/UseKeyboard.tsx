import { FunctionComponent as FC, ReactNode, useRef, useState } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

// renders on clicking password while windowWidth > 555px
const UseKeyboard: FC = ({}) => {
  const [keyboardInput, setKeyboardInput] = useState('');
  const [layout, setLayout] = useState('default');
  const keyboard = useRef<any>();

  const onChange = (input: any) => {
    setKeyboardInput(keyboardInput);
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

  return (
    <>
      <input
        value={keyboardInput}
        placeholder={'Tap on the virtual keyboard to start'}
        onChange={onChangeInput}
      />
      <Keyboard
        keyboardRef={(r) => (keyboard.current = r)}
        layoutName={layout}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </>
  );
};
export default UseKeyboard;
