import { IconType } from 'react-icons';

interface InputProps {
  value: string;
  setValue: (value: string) => void;
  icon?: IconType;
  placeholder?: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({
  value,
  setValue,
  icon: Icon,
  placeholder,
  type,
}) => {
  return (
    <div className="flex w-full h-full focus:text-xs">
      {Icon && <Icon size={32} className="mr-5" />}
      <input
        id={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        type={type || "text"}
        className="bg-transparent outline-none text-2xl text-white pb-2 pt-1 px-4 border-b-2 border-b-white relative placeholder:text-white"
      />
    </div>
  );
};

export default Input;
