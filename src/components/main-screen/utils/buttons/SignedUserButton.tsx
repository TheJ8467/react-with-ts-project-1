import { useModalState } from '../../../../hooks/use-modal-state';
import { ButtonProps } from '../../../../interfaces/props/ButtonProps';

const SignedUserButton: React.FC<ButtonProps> = ({ handleSignOutClick }) => {
  const { isLogin, handlesSetShowModal } = useModalState();
  if (isLogin) {
    return (
      <div className="text-sm w-full flex justify-center mt-8">
        <button
          className="border rounded-xl p-2 bg-yellow-400 m-2"
          onClick={handleSignOutClick}
        >
          Sign out
        </button>
        <button
          className="border rounded-lg bg-red-300 p-2 m-2"
          onClick={() => handlesSetShowModal(false)}
        >
          Close
        </button>
      </div>
    );
  } else {
    return null;
  }
};

export default SignedUserButton;
