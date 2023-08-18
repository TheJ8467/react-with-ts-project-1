import { render, screen } from '@testing-library/react';
import MyInfoModalPage from './MyInfoModalPage';
import { useModalState } from '../../hooks/use-modal-state';
import { Provider } from 'react-redux';
import { store } from '../../store';

// ... your mock setups ...

describe('<MyInfoModalPage />', () => {
  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <MyInfoModalPage />
      </Provider>,
    );
  });

  it('displays the welcome message', () => {
    render(
      <Provider store={store}>
        <MyInfoModalPage />
      </Provider>,
    );
    expect(
      screen.getByText(/LoginStatus renders welcome message to user/i),
    ).toBeInTheDocument();
  });

  // If you want to test the conditional rendering of buttons:
  it('renders the SignedUserButton when user is logged in', () => {
    (useModalState as jest.Mock).mockReturnValue({
      handlesSetIsLogin: jest.fn().mockReturnValue(true),
      handleSetEmail: jest.fn(),
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
    (useModalState as jest.Mock).mockReturnValue({
      handlesSetIsLogin: jest.fn().mockReturnValue(false),
      handleSetEmail: jest.fn(),
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
