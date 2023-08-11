import { useModalState } from '../../../../hooks/use-modal-state';
import { useWindow } from '../../../../hooks/use-window';
import { ButtonProps } from '../../../../interfaces/props/ButtonProps';

const ActionButton: React.FC<ButtonProps> = ({ action }) => {
  const { windowHeight } = useWindow();

  if (windowHeight > 750) {
    return (
      <button className="border rounded-lg border-black p-2 mt-2 float-right">
        {action}
      </button>
    );
  } else {
    return (
      <div className="mt-4">
        <button className="border rounded-lg bg-red-300 p-2 mt-2 w-3/12">
          Close
        </button>
        <button className="border rounded-lg border-black p-2 mt-2 float-right">
          {action}
        </button>
      </div>
    );
  }
};
export default ActionButton;

// let buttons;

// if (windowHeight > 750) {
//   buttons = (
//     <button className="border rounded-lg border-black p-2 mt-2 float-right">
//       Sign in
//     </button>
//   );
// } else {
//   buttons = (
//     <div className="mt-4">
//       <button className="border rounded-lg bg-red-300 p-2 mt-2 w-3/12">
//         Close
//       </button>
//       <button className="border rounded-lg border-black p-2 mt-2 float-right">
//         Sign in
//       </button>
//     </div>
//   );
// }
