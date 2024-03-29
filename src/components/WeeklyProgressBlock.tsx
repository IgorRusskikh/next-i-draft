"use client";

import React from 'react';
import { MdOutlineIncompleteCircle } from 'react-icons/md';

import Box from './layout/Box';

const WeeklyProgressBlock: React.FC = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
    },
  ];

  const boxBody = (
    <div className="flex flex-col">
      <div className="flex gap-6">
        <div className="flex items-center gap-2">
          <div className="px-[0.3rem] py-[0.3rem] h-fit w-fit rounded-full bg-[#262626]"></div>
          <span className="text-xl font-medium">Sport</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="px-[0.3rem] py-[0.3rem] h-fit w-fit rounded-full bg-[#939393]"></div>
          <span className="text-xl font-medium">Study</span>
        </div>
      </div>
    </div>
  );

  return (
    <Box
      label="Weekly progress"
      headerIcons={[MdOutlineIncompleteCircle]}
      boxBody={boxBody}
      theme="transparent"
    />
  );
};

export default WeeklyProgressBlock;
