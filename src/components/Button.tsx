import { ReactNode } from 'react';
import { IconType } from 'react-icons';

interface ButtonProps {
  children: ReactNode;
  icon?: IconType;
  justifyContent?: string;
  rounded?: string;
  border?: boolean;
  theme?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  icon: Icon,
  justifyContent,
  rounded,
  border = false,
  theme = "dark",
}) => {
  return (
    <button
      className={`
        flex
        items-center
        px-4
        py-3
        transition-all
        duration-300
        text-md
        border
        w-full
        h-fit
        ${rounded ? `${rounded} w-fit` : "rounded-full w-full"}
        ${border ? "border-black" : "border-transparent"}
        ${
          theme === "dark"
            ? "bg-[#262626] text-white"
            : `bg-white text-black hover:bg-[#2626265f]`
        }
        ${justifyContent || ""}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
