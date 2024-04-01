import { CircularProgressbar } from 'react-circular-progressbar';

import Box from './Box';

const TaskList: React.FC = () => {
  const text = "Develop a new plan for Alina's education; Print a new timetable; Buy ..."

  const customHeader: JSX.Element = (
    <div className="w-full flex items-center justify-between">
      <h1 className={`font-semibold text-2xl w-fit`}>New Schedule</h1>
      <div className=" w-10 h-10 relative">
        <div className="w-full h-full absolute">
          <CircularProgressbar
            value={25}
            text="1/4"
            className="w-fit h-fit absolute right-0 top-0"
            strokeWidth={10}
            styles={{
              trail: { stroke: "#9ba1b0" },
              path: { stroke: "#fff" },
              text: {
                fontSize: 26,
                fill: "white",
              },
            }}
          />
        </div>
      </div>
    </div>
  );

  const boxBody = (
    <div className="w-full flex flex-col mt-3 text-lg">
      <div className="flex gap-3 items-center">
        <div className="w-[8px] h-[8px] rounded-full bg-green-400"></div>
        <h4 className="text-[#858a96]">In progress</h4>
      </div>
      <div className="mt-3">
        <p className="text-[#858a96]">
          <span className="text-[#cbcbcb]">Done:</span> {text.length > 75 ? text.slice(0, 75) + "..." : text}
        </p>
      </div>
    </div>
  );

  return (
    <div className="flex flex-wrap gap-5">
      <div className="min-w-[28.5rem] max-w-[28.5rem] h-auto min-h-[10rem]">
        <Box theme="dark" customBoxHeader={customHeader} boxBody={boxBody} />
      </div>
      <div className="min-w-[28.5rem] max-w-[28.5rem] h-auto min-h-[10rem]">
        <Box theme="dark" customBoxHeader={customHeader} boxBody={boxBody} />
      </div>
      <div className="min-w-[28.5rem] max-w-[28.5rem] h-auto min-h-[10rem]">
        <Box theme="dark" customBoxHeader={customHeader} boxBody={boxBody} />
      </div>
      <div className="min-w-[28.5rem] max-w-[28.5rem] h-auto min-h-[10rem]">
        <Box theme="dark" customBoxHeader={customHeader} boxBody={boxBody} />
      </div>
      <div className="min-w-[28.5rem] max-w-[28.5rem] h-auto min-h-[10rem]">
        <Box theme="dark" customBoxHeader={customHeader} boxBody={boxBody} />
      </div>
      <div className="min-w-[28.5rem] max-w-[28.5rem] h-auto min-h-[10rem]">
        <Box theme="dark" customBoxHeader={customHeader} boxBody={boxBody} />
      </div>
    </div>
  );
};

export default TaskList;
