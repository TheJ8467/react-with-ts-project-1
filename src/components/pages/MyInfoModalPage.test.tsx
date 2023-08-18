import { render, screen } from '@testing-library/react';
import MyInfoModalPage from './MyInfoModalPage';
import { useModalState } from '../../hooks/use-modal-state';
import { Provider } from 'react-redux';
import { useModalStateMock } from '../main-screen/utils/test/useModalStateMock';
import { store } from '../main-screen/utils/test/useModalMockStore';
import React from 'react';

// ... your mock setups ...

// Mock the useDispatch hook
const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
}));

jest.mock('../../hooks/use-modal-state', () => ({
  useModalState: jest.fn(),
}));

// Then in your tests, you can provide a mock implementation:
afterEach(() => {
  jest.resetAllMocks();
});

describe('<MyInfoModalPage />', () => {
  it('displays the welcome message', () => {
    (
      useModalState as jest.MockedFunction<typeof useModalState>
    ).mockReturnValue({
      ...useModalStateMock,
    });
    render(
      <Provider store={store}>
        <MyInfoModalPage />
      </Provider>,
    );
    expect(screen.getByText(/Guest/i)).toBeInTheDocument();
  });

  // If you want to test the conditional rendering of buttons:
  it('renders sign out button when user is logged in', () => {
    (
      useModalState as jest.MockedFunction<typeof useModalState>
    ).mockReturnValue({
      ...useModalStateMock,
      isLogin: true,
    });
    render(
      <Provider store={store}>
        <MyInfoModalPage />
      </Provider>,
    );
    // Assuming SignedUserButton has a text "Sign Out"
    expect(screen.getByText(/Sign Out/i)).toBeInTheDocument();
  });

  it('renders the GuestButtons when user is not logged in', () => {
    (
      useModalState as jest.MockedFunction<typeof useModalState>
    ).mockReturnValue({
      ...useModalStateMock,
    });
    render(
      <Provider store={store}>
        <MyInfoModalPage />
      </Provider>,
    );
    // Assuming GuestButtons has texts "Register" and "Sign In"
    expect(screen.getByText(/Register/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign In/i)).toBeInTheDocument();
  });

  // ... Add more tests as needed, such as simulating button clicks, etc.
});
