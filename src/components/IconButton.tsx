interface IconButtonProps {
  children: JSX.Element;
  theme?: string;
  bg?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({
  children: Icon,
  theme = "light",
  bg = false,
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
        ${bg ? (theme === "light" ? "bg-black" : "bg-white") : ""}
        hover:${theme === "light" ? "border-white" : "border-black"}
      `}
    >
      {Icon}
    </button>
  );
};

export default IconButton;
