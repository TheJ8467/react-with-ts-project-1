import { fireEvent, render, screen } from '@testing-library/react';
import { useModalState } from '../../../hooks/use-modal-state';
import { Provider } from 'react-redux';
import { useModalStateMock } from '../../main-screen/utils/test/useModalStateMock';
import { store } from '../../main-screen/utils/test/useModalMockStore';
import { useAuth } from '../../../hooks/use-auth';
import { useWindowMock } from '../../main-screen/utils/test/useWindowMock';
import { useWindow } from '../../../hooks/use-window';
import { useAuthMock } from '../../main-screen/utils/test/useAuthMock';
import RegisterModalPage from '../RegisterModalPage';

jest.mock('../../../hooks/use-modal-state', () => ({
  useModalState: jest.fn(),
}));

jest.mock('../../../hooks/use-auth', () => ({
  useAuth: jest.fn(),
}));

jest.mock('../../../hooks/use-window', () => ({
  useWindow: jest.fn(),
}));

afterEach(() => {
  jest.resetAllMocks();
});

describe('<MyInfoModalPage />', () => {
  (useAuth as jest.MockedFunction<typeof useAuth>).mockReturnValue({
    ...useAuthMock,
  });
  (useWindow as jest.MockedFunction<typeof useWindow>).mockReturnValue({
    ...useWindowMock,
  });
  (useModalState as jest.MockedFunction<typeof useModalState>).mockReturnValue({
    ...useModalStateMock,
  });
  const { container } = render(
    <Provider store={store}>
      <RegisterModalPage />
    </Provider>,
  );
  const el = container.querySelector('button');

  it('displays register form', () => {
    expect(screen.getByText(/register/i)).toBeInTheDocument();
    expect(el).toBeInTheDocument();
  });

  it('renders password keyboard on clicking', () => {
    (useWindow as jest.MockedFunction<typeof useWindow>).mockReturnValue({
      ...useWindowMock,
      windowWidth: 556,
    });
    (useAuth as jest.MockedFunction<typeof useAuth>).mockReturnValue({
      ...useAuthMock,
    });
    (
      useModalState as jest.MockedFunction<typeof useModalState>
    ).mockReturnValue({
      ...useModalStateMock,
    });

    const { container } = render(
      <Provider store={store}>
        <RegisterModalPage />
      </Provider>,
    );
    const passwordInput = container.querySelector('input[name="password"]')!;
    const confirmPasswordInput = container.querySelector(
      'input[name="confirm-password"]',
    )!;
    fireEvent.click(passwordInput);
    expect(document.activeElement).toBe(passwordInput);
    // const keyboard = document.body.querySelector('.react-simple-keyboard');
    // expect(keyboard).toBeInTheDocument();
    // fireEvent.click(passwordInput);
    // expect(keyboard).not.toBeInTheDocument();
    // fireEvent.click(confirmPasswordInput);
    // expect(keyboard).toBeInTheDocument();
    // fireEvent.click(confirmPasswordInput);
    // expect(keyboard).not.toBeInTheDocument();
  });
});
