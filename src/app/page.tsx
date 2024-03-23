import Header from '@/components/Header';
import MonthGoalsBlock from '@/components/MonthGoalsBlock';
import MonthProgressBlock from '@/components/MonthProgressBlock';
import Sidebar from '@/components/Sidebar';
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
          <div className="flex justify-between">
            <div className="w-[26rem] h-[19em] my-4">
              <MonthGoalsBlock />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
