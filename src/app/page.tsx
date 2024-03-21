import Header from '@/components/Header';
import MonthProgressBlock from '@/components/MonthProgressBlock';
import Sidebar from '@/components/Sidebar';
import ProgressBlock from '@/components/TotalProgressBlock';

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
        <div className="flex justify-between">
          <div className="w-[29.5rem] h-[25rem] my-5">
            <ProgressBlock theme="dark" />
          </div>
          <div className="w-[29.5rem] h-[25rem] my-5">
            <ProgressBlock />
          </div>
          <div className="w-[25.5rem] h-[25rem] my-5">
            <MonthProgressBlock />
          </div>
        </div>
      </div>
    </div>
  );
}
