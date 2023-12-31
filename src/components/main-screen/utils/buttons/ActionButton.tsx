import { useModalState } from '../../../../hooks/use-modal-state';
import { ButtonProps } from '../../../../interfaces/props/ButtonProps';

const ActionButton: React.FC<ButtonProps> = ({ action }) => {
  const {
    showRegisterModal,
    handlesSetShowRegisterModal,
    showSignInModal,
    handlesSetSignInModal,
  } = useModalState();

  const handleClose = () => {
    if (showRegisterModal) {
      handlesSetShowRegisterModal(false);
    } else if (showSignInModal) {
      handlesSetSignInModal(false);
    }
  };
  return (
    <div className="mt-4 text-sm">
      <button
        type="button"
        className="border rounded-lg bg-red-300 p-2 mt-2 w-3/12"
        onClick={handleClose}
      >
        Close
      </button>
      <button className="border rounded-lg border-black p-2 mt-2 float-right">
        {action}
      </button>
    </div>
  );
};
export default ActionButton;
