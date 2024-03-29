import { ReactNode, Suspense } from 'react';
import { IconType } from 'react-icons';

import IconButton from '../IconButton';

interface BoxProps {
  label?: string;
  labelIcon?: IconType;
  headerIcons?: IconType[];
  customBoxHeader?: JSX.Element;
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
      className={`w-full h-full rounded-3xl bg-[#262626] px-7 py-6 flex flex-col relative shadow-xl
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
      {BoxHeader ? (
        BoxHeader
      ) : (
        <div
          className={`w-full flex items-center 
        ${headerIcons?.length ? "justify-between" : "justify-center"}`}
        >
          {!LabelIcon ? (
            <h1 className={`font-semibold text-3xl w-fit`}>{label}</h1>
          ) : (
            <LabelIcon size={42} />
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
      )}

      {/* BOX BODY */}
      {BoxBody && (
        <Suspense>
          <div className={`w-full h-full relative`}>{BoxBody}</div>
        </Suspense>
      )}

      {/* BOX FOOTER */}
      {BoxFooter && <div className="w-full">{BoxFooter}</div>}
    </div>
  );
};

export default Box;
