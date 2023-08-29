import { FunctionComponent as FC, ReactNode, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setKeyboardInput, setLayout } from '../store/slices/keyboardSlice';

// renders on clicking password while windowWidth > 555px
export const useKeyboard = () => {
  const dispatch = useDispatch();
  const keyboard = useRef<any>();
  const { keyboardInput, layout, placeholder } = useSelector(
    (state: RootState) => state.keyboard,
  );

  const handleSetKeyboardInput = (value: string) =>
    dispatch(setKeyboardInput(value));
  const handleSetLayout = (value: string) => dispatch(setLayout(value));

  const onChange = (input: any) => {
    handleSetKeyboardInput(input);
    console.log('Input changed', input);
  };

  const handleShift = () => {
    const newLayoutName = layout === 'default' ? 'shift' : 'default';
    handleSetLayout(newLayoutName);
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
    handleSetKeyboardInput(input);
    keyboard.current.handleSetKeyboardInput(input);
  };

  return {
    keyboard,
    keyboardInput,
    layout,
    placeholder,
    onChange,
    onKeyPress,
    handleSetKeyboardInput,
    onChangeInput,
  };
};
