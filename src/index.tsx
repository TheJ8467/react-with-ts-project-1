import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './components/App';
import './tailwind.css';
import './index.css';
import AppWep from './components/AppWep';
// import { useState, useEffect } from 'react';
import AppFailed from './components/AppFailed';
import { useWindow } from './hooks/use-window';

const el = document.getElementById('root') as HTMLElement;
const root = createRoot(el);

const RootComponent = () => {
  const { windowWidth } = useWindow();

  let AppToRender;

  if (windowWidth > 768) {
    AppToRender = AppWep;
  } else if (windowWidth >= 393) {
    AppToRender = App;
  } else {
    AppToRender = AppFailed;
  }

  return (
    <Provider store={store}>
      <AppToRender />
    </Provider>
  );
};

root.render(<RootComponent />);

// const [windowWidth, setWindowWidth] = useState(window.innerWidth);

// useEffect(() => {
//   const handleResize = () => setWindowWidth(window.innerWidth);
//   window.addEventListener('resize', handleResize);
//   return () => window.removeEventListener('resize', handleResize);
// }, []);
