import { FaPlus } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useDispatch } from 'react-redux';

import TaskCard from '@/components/DashboardTask/TaskCard';
import MonthGoalsBlock from '@/components/MonthGoalsBlock';
import { setModal } from '@/features/modalCreateTask/modalCreateTaskSlice';
import formatDeadline from '@/libs/formatDeadline';

const TaskOverview: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-10">
      <div className="min-w-[28rem] h-[21rem] my-4">
        <MonthGoalsBlock />
      </div>
      <div className="flex flex-col w-full my-4">
        <div className="flex justify-between w-full">
          <h1 className="text-3xl font-semibold">Task In process (2)</h1>
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
                  formatDeadline("29.03.2024") === "Today"
                    ? "animate-rotate-card"
                    : ""
                }`}
              >
                <TaskCard
                  task="Buy Susan a gift for Birthday"
                  deadline={formatDeadline("29.03.2024")}
                />
              </div>
            );
          })}
          <div
            className="w-[16.7rem] h-[16.7rem] flex justify-center items-center gap-2 border-2 border-dashed border-[#262626] rounded-3xl cursor-pointer"
            onClick={() => dispatch(setModal(true))}
          >
            <FaPlus size={28} />
            <h2 className="text-3xl font-medium">Add task</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskOverview;
