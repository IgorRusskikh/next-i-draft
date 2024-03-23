import Header from '@/components/Header';
import MonthGoalsBlock from '@/components/MonthGoalsBlock';
import MonthProgressBlock from '@/components/MonthProgressBlock';
import Sidebar from '@/components/Sidebar';
import TaskCard from '@/components/TaskCard';
import ProgressBlock from '@/components/TotalProgressBlock';
import WeeklyProgressBlock from '@/components/WeeklyProgressBlock';

export default function Home() {
  return (
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
                <h1 className="text-3xl font-semibold">Task In process (2)</h1>
                <h4 className="text-lg">Open archive</h4>
              </div>
              <div className="flex gap-12 mt-[2rem]">
                <div className="w-[16.7rem] h-[16.7rem]">
                  <TaskCard
                    task="Buy Susan a gift for Birthday"
                  />
                </div>
                <div className="w-[16.7rem] h-[16.7rem]">
                  <TaskCard
                    task="Buy Susan a gift for Birthday"
                  />
                </div>
                <div className="w-[16.7rem] h-[16.7rem]">
                  <TaskCard
                    task="Buy Susan a gift for Birthday"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
