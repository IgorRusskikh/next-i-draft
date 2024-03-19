import { IconType } from 'react-icons';

interface ButtonProps {
  label?: string;
  icon?: IconType;
  justifyContent?: string;
  rounded?: string;
  border?: boolean;
  theme?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
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
        border-1
        ${rounded ? `${rounded} w-fit` : "rounded-2xl w-full"}
        ${
          theme === "dark"
            ? "bg-[#262626] text-white"
            : `bg-white text-black hover:bg-[#2626265f] hover:border-black ${
                border ? "border-black" : "border-transparent"
              }`
        }
        ${justifyContent || ""}
      `}
    >
      {Icon && <Icon size={18} className={`${label ? "mr-2" : ""}`} />}
      <span>{label}</span>
    </button>
  );
};

export default Button;
