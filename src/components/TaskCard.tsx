"use client";

import { useState } from 'react';
import { IconType } from 'react-icons';
import { BsThreeDots } from 'react-icons/bs';
import { CiGift } from 'react-icons/ci';
import { GrNotification } from 'react-icons/gr';

import Box from './Box';

interface TaskCardProps {
  icon?: IconType;
  task: string;
  deadline: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ icon, task, deadline }) => {
  const [notificate, setNotificate] = useState(false);

  const switchNotification = () => {
    setNotificate(!notificate);
  };

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
      labelIcon={CiGift}
      headerIcons={[BsThreeDots]}
      boxBody={boxBody}
      boxFooter={boxFooter}
    />
  );
};

export default TaskCard;
