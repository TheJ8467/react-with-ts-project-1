import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();

export const store = mockStore({
  showModal: false,
  showRegisterModal: false,
  showSignInModal: false,
  showPasswordModal: false,
});
