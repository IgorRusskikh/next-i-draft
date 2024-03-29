import { useState } from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { IconType } from 'react-icons';
import { BsThreeDots } from 'react-icons/bs';
import { CiGift } from 'react-icons/ci';
import { GrNotification } from 'react-icons/gr';

import ActionMenu from './ActionMenu';
import Box from './Box';
import IconButton from './IconButton';

interface TaskCardProps {
  icon?: IconType;
  task: string;
  deadline: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ icon, task, deadline }) => {
  const [notificate, setNotificate] = useState(false);
  const [showActions, setShowActions] = useState(false);

  const ref = useDetectClickOutside({
    onTriggered: () => {
      setShowActions(false);
    },
  });

  const switchNotification = () => {
    setNotificate(!notificate);
  };

  const customBoxHeader: JSX.Element = (
    <>
      <div
        ref={ref}
        className={`${
          !showActions ? "animate-fade-out" : "animate-fade-in"
        } animate-fade-in absolute z-10 right-[57.5%] bottom-[110%]`}
      >
        <ActionMenu actions={[{ label: "Pin", action: () => {} }]} />
      </div>
      <div className="w-full flex items-center justify-between relative">
        <CiGift size={42} />
        <IconButton
          onClick={() => {
            setShowActions(!showActions);
          }}
        >
          <BsThreeDots size={32} />
        </IconButton>
      </div>
    </>
  );

  const boxBody: JSX.Element = (
    <div className="flex items-center w-full h-full">
      <h3 className="text-2xl text-start w-fit h-fit">{task}</h3>
    </div>
  );

  const boxFooter: JSX.Element = (
    <div className="flex items-center justify-between">
      <h6 className="text-[#9ba1b0] text-sm">{deadline}</h6>
      <div
        className={`absolute right-0 bottom-0 bg-[#${
          notificate ? "262626" : "transparent"
        }] px-6 py-6 rounded-3xl rounded-tr-none cursor-pointer transition-all duration-300`}
        onClick={switchNotification}
      >
        <GrNotification size={28} color={notificate ? "white" : "black"} />
      </div>
    </div>
  );

  return (
    <Box
      customBoxHeader={customBoxHeader}
      boxBody={boxBody}
      boxFooter={boxFooter}
    />
  );
};

export default TaskCard;
