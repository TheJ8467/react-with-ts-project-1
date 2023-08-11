import { useModalState } from '../../../../hooks/use-modal-state';
import { useWindow } from '../../../../hooks/use-window';
import { ButtonProps } from '../../../../interfaces/props/ButtonProps';

const RegisterButtons: React.FC<ButtonProps> = () => {
  const { windowHeight } = useWindow();
  const { handlesSetShowRegisterModal } = useModalState();

  if (windowHeight > 750) {
    return (
      <button className="border rounded-lg border-black p-2 mt-2 float-right">
        Register
      </button>
    );
  } else {
    return (
      <div className="mt-4">
        <button
          // onClick={() => handlesSetShowRegisterModal(false)}
          className="border rounded-lg bg-red-300 p-2 mt-2 w-3/12"
        >
          Close
        </button>
        <button className="border rounded-lg border-black p-2 mt-2 float-right">
          Register
        </button>
      </div>
    );
  }
};
export default RegisterButtons;
