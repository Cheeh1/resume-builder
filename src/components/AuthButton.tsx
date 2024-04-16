import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  // className: string;
}

const AuthButton: FC<Props> = ({ children }) => {
  return (
    <button
      type="submit"
      className="w-full border rounded-md py-3 text-white bg-secondary font-medium"
    >
      {children}
    </button>
  );
};
export default AuthButton;
