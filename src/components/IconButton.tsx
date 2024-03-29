interface IconButtonProps {
  children: JSX.Element;
  theme?: string;
  bg?: boolean;
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({
  children: Icon,
  theme = "light",
  bg = false,
  onClick,
}) => {
  return (
    <button
      className={`
        rounded-full 
        flex
        px-3
        py-3
        h-fit
        w-fit
        transition-all
        duration-300
        border
        border-transparent
        ${bg ? (theme === "light" ? "bg-black" : "bg-white") : ""}
      `}
      onClick={onClick}
    >
      {Icon}
    </button>
  );
};

export default IconButton;
