import { FaPlus } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';

import Header from '@/components/Header';
import MonthGoalsBlock from '@/components/MonthGoalsBlock';
import MonthProgressBlock from '@/components/MonthProgressBlock';
import Sidebar from '@/components/Sidebar';
import TaskCard from '@/components/TaskCard';
import ProgressBlock from '@/components/TotalProgressBlock';
import WeeklyProgressBlock from '@/components/WeeklyProgressBlock';
import formatDeadline from '@/libs/formatDeadline';

export default function Home() {
  return (
    <div
      className="w-full 
    h-full 
    py-6
    px-5
    z-10 
    backdrop-blur-md 
    rounded-3xl 
    select-none
    border
  border-white"
    >
      <div
        className="
        flex 
        w-full 
        h-full
      "
      >
        <div className="w-72">
          <Sidebar />
        </div>
        <div
          className="
          w-full 
          px-10
        "
        >
          <Header />
          <div className="flex flex-col">
            <div className="flex justify-between">
              <div className="w-[29.5rem] h-[25rem] my-4">
                <ProgressBlock theme="dark" />
              </div>
              <div className="w-[29.5rem] h-[25rem] my-4">
                <WeeklyProgressBlock />
              </div>
              <div className="w-[25.5rem] h-[25rem] my-4">
                <MonthProgressBlock />
              </div>
            </div>
            <div className="flex gap-10">
              <div className="min-w-[28rem] h-[21rem] my-4">
                <MonthGoalsBlock />
              </div>
              <div className="flex flex-col w-full my-4">
                <div className="flex justify-between w-full">
                  <h1 className="text-3xl font-semibold">
                    Task In process (2)
                  </h1>
                  <div className="flex items-center cursor-pointer">
                    <h4 className="text-lg">Open archive</h4>
                    <MdKeyboardArrowRight size={28} />
                  </div>
                </div>
                <div className="flex gap-12 mt-[2rem]">
                  {[1, 2].map((task, index) => {
                    return (
                      <div
                        key={index}
                        className={`w-[16.7rem] h-[16.7rem] transition-all delay-0 ${
                          formatDeadline("24.03.2024") === "Today"
                            ? "animate-rotate-card"
                            : ""
                        }`}
                      >
                        <TaskCard
                          task="Buy Susan a gift for Birthday"
                          deadline={formatDeadline("24.03.2024")}
                        />
                      </div>
                    );
                  })}
                  <div className="w-[16.7rem] h-[16.7rem] flex justify-center items-center gap-2 border-2 border-dashed border-[#262626] rounded-3xl cursor-pointer">
                    <FaPlus size={28} />
                    <h2 className="text-3xl font-medium">Add task</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
