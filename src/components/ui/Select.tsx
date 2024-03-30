import { useState } from 'react';
import { IconType } from 'react-icons';
import { FaList } from 'react-icons/fa';

interface Option {
  label: string;
  icon?: IconType;
}

interface SelectProps {
  options: Option[];
  selectedOption: Option | null;
  setSelectedOption: (option: Option) => void;
}

const Select: React.FC<SelectProps> = ({
  options,
  selectedOption,
  setSelectedOption,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full relative">
      <div
        className="w-full border-2 rounded-xl py-2 px-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center cursor-pointer">
          <h3 className="text-xl">
            {selectedOption ? selectedOption.label : "Status"}
          </h3>
          {selectedOption?.icon ? (
            <selectedOption.icon size={20} />
          ) : (
            <FaList size={20} />
          )}
        </div>
        <div
          className={`absolute border min-w-[10rem] left-0 rounded-xl transition-all overflow-hidden py-2 bg-white w-full ${
            isOpen
              ? "translate-y-5 animate-fade-in"
              : "translate-y-2 animate-fade-out"
          }`}
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
