import { useModalState } from '../../../../hooks/use-modal-state';
import { useWindow } from '../../../../hooks/use-window';
import { ButtonProps } from '../../../../interfaces/props/ButtonProps';

const RegisterButtons: React.FC<ButtonProps> = () => {
  const { windowHeight } = useWindow();

  if (windowHeight > 750) {
    return (
      <button className="border rounded-lg border-black p-2 mt-2 float-right bg-blue-400">
        Register
      </button>
    );
  } else {
    return (
      <div className="mt-4 text-sm">
        <button className="border rounded-lg bg-red-300 p-2 mt-2 w-3/12">
          Close
        </button>
        <button className="border rounded-lg border-black p-2 mt-2 float-right bg-blue-400">
          Register
        </button>
      </div>
    );
  }
};
export default RegisterButtons;
