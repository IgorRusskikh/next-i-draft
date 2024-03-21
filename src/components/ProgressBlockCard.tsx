import { IconType } from 'react-icons';

interface ProgressBlockCardProps {
  bgColor: string;
  icon: IconType;
  counter: number;
  children: string;
}

const ProgressBlockCard: React.FC<ProgressBlockCardProps> = ({
  bgColor,
  icon: Icon,
  counter,
  children,
}) => {
  return (
    <div
      className={`
        w-full 
        h-full 
        rounded-2xl 
        flex 
        flex-col 
        justify-between 
        px-4 
        py-4
        items-center
        text-black
        ${bgColor}
      `}
    >
      <Icon size={24} />
      <div className="flex flex-col items-center">
        <h3 className="font-bold text-4xl">{counter}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default ProgressBlockCard;
