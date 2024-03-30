import { Suspense } from 'react';

import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';

import DashboardOverview from './DashboardOverview';
import TaskOverview from './TaskOverview';

const Dashboard: React.FC = () => {
  return (
    <div className="w-full h-full py-6 px-5 z-10 backdrop-blur-md   rounded-3xl *:select-none border border-white">
      <div className="flex w-full h-full">
        <div className="w-72">
          <Sidebar />
        </div>
        <div className="w-full px-10">
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
