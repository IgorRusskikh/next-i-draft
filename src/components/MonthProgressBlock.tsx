"use client";

import 'react-circular-progressbar/dist/styles.css';

import { CircularProgressbar } from 'react-circular-progressbar';
import { BsGraphUpArrow } from 'react-icons/bs';
import { FiDownload } from 'react-icons/fi';
import { IoShareSocialOutline } from 'react-icons/io5';

import IconButton from './IconButton';
import Box from './layout/Box';
import Button from './ui/Button';

const MonthProgressBlock: React.FC = () => {
  const boxBody: JSX.Element = (
    <div className="flex flex-col">
      <h4 className="w-fit mb-2">
        <span className="font-extrabold">+20%</span> compared to last month*
      </h4>
      <div className="flex w-full justify-between relative">
        <div className="flex flex-col gap-3 justify-center">
          <div className="flex items-center gap-2">
            <div className="px-[0.3rem] py-[0.3rem] h-fit w-fit rounded-full bg-[#262626]"></div>
            <span className="text-xl font-medium">Sport</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="px-[0.3rem] py-[0.3rem] h-fit w-fit rounded-full bg-[#5b5b5b]"></div>
            <span className="text-xl font-medium">Study</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="px-[0.3rem] py-[0.3rem] h-fit w-fit rounded-full bg-[#939393]"></div>
            <span className="text-xl font-medium">Project</span>
          </div>
        </div>
        <div className="w-48 h-48 relative">
          <div className="w-full h-full absolute">
            <CircularProgressbar
              value={85}
              className="w-fit h-fit absolute right-0 top-0"
              strokeWidth={4}
              styles={{
                trail: { stroke: "#e6e6e6" },
                path: { stroke: "#262626" },
              }}
            />
          </div>
          <div className="w-full h-full absolute">
            <CircularProgressbar
              value={50}
              className="w-[9.5rem] h-[9.5rem] absolute right-0 top-5"
              strokeWidth={5}
              styles={{
                trail: { stroke: "#e6e6e6" },
                path: { stroke: "#5b5b5b" },
              }}
            />
          </div>
          <div className="flex justify-center items-center w-full h-full absolute">
            <CircularProgressbar
              value={23}
              className="w-[7rem] h-[7rem] absolute right-0 top-10"
              strokeWidth={5}
              styles={{
                trail: { stroke: "#e6e6e6" },
                path: { stroke: "#939393" },
              }}
            />
            <div className="flex flex-col justify-center items-center w-full">
              <p className="font-semibold text-2xl leading-5">120%</p>
              <p className="text-[#8f8f8fd6] text-xs leading-5">overdone</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const boxFooter: JSX.Element = (
    <div className="flex justify-between items-center gap-5 mt-1.5 h-full">
      <div className="h-fit">
        <IconButton bg={true} theme="light">
          <IoShareSocialOutline size={32} color="white" />
        </IconButton>
      </div>
      <div className="w-full">
        <Button theme="light" border={true}>
          <div className="flex justify-center items-center gap-3 w-full">
            <span className="text-lg">Download Report</span>
            <FiDownload size={24} />
          </div>
        </Button>
      </div>
    </div>
  );

  return (
    <Box
      label="Month progress"
      headerIcons={[BsGraphUpArrow]}
      boxBody={boxBody}
      boxFooter={boxFooter}
    />
  );
};

export default MonthProgressBlock;
