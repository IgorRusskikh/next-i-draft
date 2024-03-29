"use client";

import { IconType } from 'react-icons';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaRegCheckCircle, FaRegDotCircle } from 'react-icons/fa';
import { IoShareSocialOutline } from 'react-icons/io5';
import { TbProgress } from 'react-icons/tb';

import Box from './layout/Box';
import ProgressBlockCard from './ProgressBlockCard';

interface TotalProgressBlockProps {
  icons?: IconType[];
  theme?: string;
}

const TotalProgressBlock: React.FC<TotalProgressBlockProps> = ({
  icons = [IoShareSocialOutline, BsThreeDotsVertical],
  theme = "transparent",
}) => {
  const blockCards = [
    {
      bgColor: "bg-custom-dark-gray",
      icon: FaRegDotCircle,
      counter: 28,
      label: "Projects",
    },
    {
      bgColor: "bg-custom-gray",
      icon: TbProgress,
      counter: 14,
      label: "In Progress",
    },
    {
      bgColor: "bg-custom-light-gray",
      icon: FaRegCheckCircle,
      counter: 11,
      label: "Completed",
    },
  ];

  const boxBody = (
    <div className="flex justify-center items-center mt-4">
      <div className="flex">
        <h2 className="w-fit font-bold text-6xl">43</h2>
        <p className="ml-3 text-sm font-extralight flex items-center w-20">
          Tasks done for all time
        </p>
      </div>
      <div className="border-r-2 h-fit py-4 rounded-2xl mx-auto"></div>
      <div className="flex">
        <h2 className="w-fit font-bold text-6xl">2</h2>
        <p className="ml-3 text-sm font-extralight flex items-center w-20">
          Projects are stopped
        </p>
      </div>
    </div>
  );

  const boxFooter = (
    <>
      <div className="border-t-8 border-t-black w-fit px-12 my-5 rounded-2xl"></div>
      <div className="flex h-full justify-between pb-12">
        {blockCards.map((card) => (
          <div className="w-[7.6rem] h-[9.90rem]" key={card.label}>
            <ProgressBlockCard
              bgColor={card.bgColor}
              icon={card.icon}
              counter={card.counter}
            >
              {card.label}
            </ProgressBlockCard>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <Box
      label="Overall Information"
      headerIcons={[IoShareSocialOutline, BsThreeDotsVertical]}
      boxBody={boxBody}
      boxFooter={boxFooter}
      theme={theme}
    />
  );
};

export default TotalProgressBlock;
