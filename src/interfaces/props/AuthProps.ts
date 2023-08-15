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
}
