import Image from 'next/image';

interface ButtonProps {
  label?: string;
  image?: string;
  direction?: string;
  border?: boolean;
  theme?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  image,
  direction = "ltr",
  border = false,
  theme = "dark",
}) => {
  return (
    <button
      className={`
        flex
        w-full
        rounded-2xl
        px-5
        py-3
        transition-all
        duration-300
        text-md
        border-1
        ${
          theme === "dark"
            ? "bg-[#262626] text-white"
            : `bg-white text-black hover:bg-[#2626265f] hover:border-black ${
                border ? "border-black" : "border-transparent"
              }`
        }
        ${direction === "ltr" ? "" : "flex-row-reverse"}
      `}
    >
      {image && (
        <Image width={10} height={10} src={image} alt="" className="mr-5" />
      )}
      <span>{label}</span>
    </button>
  );
};

export default Button;
