import { FunctionComponent as FC } from 'react';
import Linkbar from './Linkbar';

const Linkbars: FC<{}> = () => {
  return (
    <div className="flex overflow-x-auto hide-scrollbar mx-2">
      <Linkbar />
      <Linkbar />
      <Linkbar />
      <Linkbar />
    </div>
  );
};

export default Linkbars;
