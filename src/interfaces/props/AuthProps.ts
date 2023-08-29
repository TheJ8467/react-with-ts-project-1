import { ReactNode } from 'react';

// This props should be reviewed

export interface AuthProps {
  action?: string;
  handleCloseModal?: () => void;
  handleSubmit?: (e: React.ChangeEvent<HTMLFormElement>) => Promise<void>;
  handleEmailChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputEmail?: string;
  handlePasswordChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  password?: string;
  handleConfirmPasswordChange?: (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  confirmPassword?: string;

  // Add keyboard feature
  keyboardInput?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  layout?: string;
  onKeyPress?: (button: ReactNode) => void;
}
