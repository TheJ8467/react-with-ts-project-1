export const useModalStateMock = {
  isLogin: false,
  email: '',
  showModal: false,
  showRegisterModal: false,
  showSignInModal: false,
  showPasswordModal: false,
  handlesSetIsLogin: jest.fn(),
  handleSetEmail: jest.fn(),
  handlesSetShowModal: jest.fn(),
  handlesSetShowRegisterModal: jest.fn(),
  handlesSetSignInModal: jest.fn(),
  handleSetPasswordModal: jest.fn(),
};
