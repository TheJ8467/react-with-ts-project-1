import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../main-screen/utils/test/useModalMockStore';
import PasswordModalPage from '../PasswordModalPage';
import { useWindow } from '../../../hooks/use-window';
import { useWindowMock } from '../../main-screen/utils/test/useWindowMock';

jest.mock('../../../hooks/use-window', () => ({
  useWindow: jest.fn(),
}));

afterEach(() => {
  jest.resetAllMocks();
});

describe('<PasswordModalPage />', () => {
  const { container } = render(
    <Provider store={store}>
      <PasswordModalPage />
    </Provider>,
  );
  const el = container.querySelector('.react-simple-keyboard');
  it('renders keyboard', () => {
    expect(el).toBeInTheDocument();
  });

  it('hides keyboard while windowWith < 555px', () => {
    (useWindow as jest.MockedFunction<typeof useWindow>).mockReturnValue({
      ...useWindowMock,
      windowWidth: 554,
    });

    expect(el).not.toBeInTheDocument();
  });

  it('renders keyboard while windowWith > 555px', () => {
    (useWindow as jest.MockedFunction<typeof useWindow>).mockReturnValue({
      ...useWindowMock,
      windowWidth: 556,
    });
    const { container } = render(
      <Provider store={store}>
        <PasswordModalPage />
      </Provider>,
    );
    const el = container.querySelector('.react-simple-keyboard');
    expect(el).toBeInTheDocument();
  });
});
