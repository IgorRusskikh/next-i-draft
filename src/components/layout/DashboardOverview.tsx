import MonthProgressBlock from '@/components/MonthProgressBlock';
import ProgressBlock from '@/components/TotalProgressBlock';
import WeeklyProgressBlock from '@/components/WeeklyProgressBlock';

const DashboardOverview: React.FC = () => {
  return (
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
  );
};

export default DashboardOverview;
