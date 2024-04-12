import { FC, ReactNode } from "react";

interface Props {
    children: ReactNode;
    className: string;
}

const AuthButton: FC<Props> = ({children, className}) => {
    return (
      <button
        className={`bg-secondary text-sm text-white rounded-md py-4 px-6 font-semibold ${className}`}
      >
        {children}
      </button>
    );
}
export default AuthButton;