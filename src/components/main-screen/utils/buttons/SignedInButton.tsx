import { useModalState } from '../../../../hooks/use-modal-state';
import { ButtonProps } from '../../../../interfaces/props/ButtonProps';

const SignedInButton: React.FC<ButtonProps> = ({
  handleSignInClick,
  handleRegisterClick,
}) => {
  const { isLogin } = useModalState();

  if (isLogin) {
    return null;
  } else {
    return (
      <div className="flex justify-between m-4">
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
  }
};

export default SignedInButton;
