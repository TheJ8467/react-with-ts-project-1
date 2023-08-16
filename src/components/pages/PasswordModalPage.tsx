import { FunctionComponent as FC } from 'react';
import { AuthProps } from '../../interfaces/props/AuthProps';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

// renders on clicking password while windowWidth > 555px
const PasswordModalPage: FC<AuthProps> = ({}) => {
  return <Keyboard />;
};

export default PasswordModalPage;
