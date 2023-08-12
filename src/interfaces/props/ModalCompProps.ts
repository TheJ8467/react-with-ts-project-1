// this interface is used for appying modal at component

export interface ModalCompProps {
  handlesSetIsLogin?: (value: boolean) => void;
  isLogin?: boolean;
  showModal?: boolean;
  handlesSetShowModal?: (value: boolean) => void;
  showRegisterModal?: boolean;
  handlesSetShowRegisterModal?: (value: boolean) => void;
  showSignInModal?: boolean;
  handlesSetSignInModal?: (value: boolean) => void;
  handleSetEmail?: (value: boolean) => void;
}
