import { ReactNode } from 'react';
import { IconType } from 'react-icons';

import IconButton from './IconButton';

interface BoxProps {
  label?: string;
  labelIcon?: IconType;
  headerIcons?: IconType[];
  customBoxHeader?: ReactNode;
  boxBody?: ReactNode;
  boxFooter?: ReactNode;
  theme?: string;
}

const Box: React.FC<BoxProps> = ({
  label,
  labelIcon: LabelIcon,
  headerIcons,
  customBoxHeader: BoxHeader,
  boxBody: BoxBody,
  boxFooter: BoxFooter,
  theme = "light",
}) => {
  return (
    <div
      className={`w-full h-full rounded-3xl bg-[#262626] px-8 py-7 flex flex-col 
      ${theme !== "dark" ? "text-black" : "text-white"}
      ${theme === "light" ? "bg-[#fcfcfc]" : ""} 
      ${theme === "dark" ? "bg-[#262626]" : ""}
      ${
        theme === "transparent"
          ? "bg-transparent border border-white backdrop-blur-xl"
          : ""
      }`}
    >
      {/* BOX HEADER */}
      <div
        className={`w-full flex items-center 
        ${headerIcons?.length ? "justify-between" : "justify-center"}`}
      >
        {!LabelIcon ? (
          <h1 className={`font-semibold text-3xl w-fit`}>{label}</h1>
        ) : (
          <LabelIcon />
        )}
        {headerIcons?.length && (
          <div className="flex gap-1">
            {headerIcons.map((Icon, index) => (
              <IconButton key={index}>
                <Icon
                  size={32}
                  color={`${theme === "light" ? "black" : ""} ${
                    theme === "dark" ? "white" : ""
                  } ${theme === "transparent" ? "black" : ""}`}
                />
              </IconButton>
            ))}
          </div>
        )}
      </div>

      {/* BOX BODY */}
      <div className={`w-full h-full`}>{BoxBody}</div>

      {/* BOX FOOTER */}
      <div className="w-full h-full">{BoxFooter}</div>
    </div>
  );
};

export default Box;
