"use client";

import { CircularProgressbar } from 'react-circular-progressbar';
import { GoPencil } from 'react-icons/go';

import Box from './Box';
import CheckBox from './CheckBox';
import IconButton from './IconButton';

const MonthGoalsBlock: React.FC = () => {
  const customHeader: JSX.Element = (
    <div className="w-full flex items-center justify-between">
      <h1 className={`font-semibold text-3xl w-fit`}>Month goals:</h1>
      <div className="flex items-center gap-1">
        <div className=" w-9 h-9 relative">
          <div className="w-full h-full absolute">
            <CircularProgressbar
              value={25}
              text="1/4"
              className="w-fit h-fit absolute right-0 top-0"
              strokeWidth={10}
              styles={{
                trail: { stroke: "#9ba1b0" },
                path: { stroke: "#262626" },
                text: {
                  fontSize: 26,
                  fill: "black",
                },
              }}
            />
          </div>
        </div>
        <IconButton>
          <GoPencil size={28} />
        </IconButton>
      </div>
    </div>
  );

  const boxBody = <CheckBox optionList={["Read 2 books", "Sports every day", "Complete the course", "Bend down with the new parachute"]} />;

  return <Box customBoxHeader={customHeader} boxBody={boxBody} />;
};

export default MonthGoalsBlock;
