import { useModalState } from '../../../../hooks/use-modal-state';
import { useWindow } from '../../../../hooks/use-window';
import { ButtonProps } from '../../../../interfaces/props/ButtonProps';

const SignOutButton: React.FC<ButtonProps> = ({ handleSignOutClick }) => {
  const { isLogin } = useModalState();
  const { windowHeight } = useWindow();

  if (isLogin && windowHeight > 750) {
    return (
      <button
        className="border rounded-xl p-2 bg-yellow-400 m-4"
        onClick={handleSignOutClick}
      >
        Sign out
      </button>
    );
  } else if (isLogin && windowHeight <= 750) {
    return (
      <div>
        <button
          className="border rounded-xl p-2 bg-yellow-400 m-4"
          onClick={handleSignOutClick}
        >
          Sign out
        </button>
        <button className="border rounded-lg bg-red-300 p-2 mt-2 w-auto">
          Close
        </button>
      </div>
    );
  } else {
    return null;
  }
};

export default SignOutButton;
