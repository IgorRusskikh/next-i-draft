import React, { useEffect, useState } from 'react';
import { IoMdCheckmark } from 'react-icons/io';

interface CheckBoxProps {
  optionList?: string[];
}

interface Option {
  id: number;
  label: string;
  checked: boolean;
}

const CheckBox: React.FC<CheckBoxProps> = ({ optionList }) => {
  const [checkedOptions, setCheckedOptions] = useState<Option[]>([]);

  useEffect(() => {
    if (optionList) {
      const initialOptions = optionList.map((option, index) => ({
        id: index,
        label: option,
        checked: false,
      }));

      setCheckedOptions(initialOptions);
    }
  }, [optionList]);

  const setChecked = (index: number) => {
    checkedOptions[index].checked = !checkedOptions[index].checked;

    setCheckedOptions([...checkedOptions]);
  };

  return (
    <div className="flex flex-col w-full h-full gap-7 py-5">
      {checkedOptions.map((option, index) => (
        <div
          key={index}
          className="flex w-fit gap-3 items-center cursor-pointer"
          onClick={() => setChecked(index)}
        >
          <div
            className={`border-2 border-[#${
              option.checked ? "262626" : "9ba1b0"
            }] rounded-md h-fit transition-all duration-300 ${
              option.checked && "bg-black"
            } min-w-[22px] min-h-[22px]`}
          >
            {/* {option.checked && } */}
            <IoMdCheckmark
              size={18}
              color="white"
              className={`transition-all duration-300 ${
                option.checked ? "opacity-100 scale-100" : "opacity-0 scale-150"
              }`}
            />
          </div>
          <h4
            className={`text-xl w-full transition-all duration-300 text-[#${
              option.checked ? "262626" : "9ba1b0"
            }]`}
          >
            {option.label.length > 26
              ? option.label.slice(0, 26) + "..."
              : option.label}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default CheckBox;
