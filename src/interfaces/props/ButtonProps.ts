export interface ButtonProps {
  handleSignInClick?: () => void;
  handleRegisterClick?: () => void;
  handleSignOutClick?: () => void;
  handlesSetShowRegisterModal?: () => void;
  handlesSetSignInModal?: () => void;
  action?: string;
}
