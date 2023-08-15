// Separate this type later.

export interface ButtonProps {
  handleSignInClick?: () => void;
  handleRegisterClick?: () => void;
  handleSignOutClick?: () => void;
  action?: string;
  // handleCloseModal?: () => void;
  // handleSubmit?: (e: React.ChangeEvent<HTMLFormElement>) => Promise<void>;
  // handleEmailChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // inputEmail?: string;
  // handlePasswordChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // password?: string;
  // handleConfirmPasswordChange?: (
  //   e: React.ChangeEvent<HTMLInputElement>,
  // ) => void;
  // confirmPassword?: string;
}
