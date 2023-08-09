import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import './tailwind.css';
import './index.css';
import App from './components/App';

const el = document.getElementById('root') as HTMLElement;
const root = createRoot(el);

const RootComponent = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

root.render(<RootComponent />);
