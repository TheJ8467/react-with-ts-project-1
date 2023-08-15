import { useModalState } from '../../../../hooks/use-modal-state';
import { useWindow } from '../../../../hooks/use-window';
import { ButtonProps } from '../../../../interfaces/props/ButtonProps';

const GuestButtons: React.FC<ButtonProps> = ({
  handleSignInClick,
  handleRegisterClick,
}) => {
  const { isLogin, handlesSetShowModal } = useModalState();
  const { windowHeight } = useWindow();

  if (isLogin) {
    return null;
  } else if (isLogin === false && windowHeight > 750) {
    return (
      <div className="flex justify-between m-4 mt-8">
        <button
          className="flex border rounded-xl p-2 bg-yellow-400 mr-4"
          onClick={handleSignInClick}
        >
          Sign in
        </button>
        <button
          className="flex border rounded-xl p-2 bg-blue-400"
          onClick={handleRegisterClick}
        >
          Register
        </button>
      </div>
    );
  } else {
    return (
      <>
        <div className="flex justify-between mt-8 mb-4 text-sm">
          <button
            className="flex border rounded-xl p-2 bg-yellow-400 mr-4"
            onClick={handleSignInClick}
          >
            Sign in
          </button>
          <button
            className="flex border rounded-xl p-2 bg-blue-400 mr-4"
            onClick={handleRegisterClick}
          >
            Register
          </button>
          <button
            className="flex border rounded-xl p-2 bg-red-300"
            onClick={() => handlesSetShowModal(false)}
          >
            Close
          </button>
        </div>
      </>
    );
  }
};

export default GuestButtons;
