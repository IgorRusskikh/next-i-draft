import { Suspense } from 'react';

import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';

import DashboardOverview from './DashboardOverview';
import TaskListSection from './TaskListSection';
import TaskOverview from './TaskOverview';

const Dashboard: React.FC = () => {
  return (
    <div className="w-full h-full py-5 px-5 z-10 backdrop-blur-md   rounded-3xl *:select-none border border-white">
      <div className="flex w-full h-full overflow-hidden overflow-x-hidden overflow-y-scroll">
        <div className="w-80 fixed">
          <Sidebar />
        </div>
        <div className="w-full px-10 ml-[19rem]">
          <Suspense>
            <Header />
          </Suspense>
          <div className="flex flex-col">
            <Suspense>
              <DashboardOverview />
            </Suspense>
            <Suspense>
              <TaskOverview />
            </Suspense>
          </div>
          <TaskListSection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
