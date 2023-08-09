import AppWep from './AppWep';
import AppFailed from './AppFailed';
import { useWindow } from '../hooks/use-window';
import AppOk from './AppOk';

const App = () => {
  const { windowWidth } = useWindow();

  let _App;

  if (windowWidth > 768) {
    _App = AppWep;
  } else if (windowWidth >= 393) {
    _App = AppOk;
  } else {
    _App = AppFailed;
  }

  return <_App />;
};

export default App;
