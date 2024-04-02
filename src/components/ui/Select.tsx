import { useState } from 'react';
import { IconType } from 'react-icons';

interface Option {
  label: string;
  icon?: IconType;
}

interface SelectProps {
  defaultLabel?: string;
  defaultIcon?: IconType;
  options: Option[];
  selectedOption: Option | null;
  setSelectedOption: (option: Option) => void;
  theme?: string;
}

const Select: React.FC<SelectProps> = ({
  defaultLabel,
  defaultIcon: Icon,
  options,
  selectedOption,
  setSelectedOption,
  theme = "light",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full relative">
      <div
        className={`w-full rounded-xl py-2 px-3 ${theme === "light" ? "border border-black" : ""
          } ${theme === "dark" ? "border-2 border-[#262626]" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center cursor-pointer">
          <h3 className="text-xl">
            {selectedOption ? selectedOption.label : defaultLabel ? defaultLabel : "Select"}
          </h3>
          {selectedOption?.icon ? (
            <selectedOption.icon size={20} className='ml-2' />
          ) : (
            Icon && <Icon size={20} className='ml-2' />
          )}
        </div>
        <div
          className={`absolute z-20 border min-w-[10rem] left-0 rounded-xl transition-all overflow-hidden py-2 w-full
            ${isOpen ? "translate-y-5 animate-fade-in" : "translate-y-2 animate-fade-out"}
            ${theme === "light" ? "bg-white text-black" : ""}
            ${theme === "dark" ? "bg-[#262626] text-white" : ""}
            ${theme === "transparent" ? "bg-white text-black" : ""}`}
        >
          <ul className="flex flex-col">
            {options.map((option) => (
              <li
                key={option.label}
                className="py-1 px-3 hover:bg-[#cbcbcb] transition-all text-xl cursor-pointer flex justify-between"
                onClick={() => setSelectedOption(option)}
              >
                {option.label}
                {option.icon && <option.icon size={20} />}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Select;
