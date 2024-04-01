import { IconType } from 'react-icons';
import { BiTask } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { ImStatsDots } from 'react-icons/im';
import { IoMdCalendar } from 'react-icons/io';
import { MdDashboard } from 'react-icons/md';

import Button from '../ui/Button';
import SidebarSection from './SidebarSection';

interface Link {
  label: string;
  url: string;
  icon?: IconType;
}

const Sidebar: React.FC = () => {
  const arrayLinks: Link[] = [
    {
      label: "Home",
      url: "/",
      icon: MdDashboard,
    },
    {
      label: "About",
      url: "/about",
      icon: IoMdCalendar,
    },
    {
      label: "Projects",
      url: "/projects",
      icon: BiTask,
    },
    {
      label: "Contact",
      url: "/contact",
      icon: ImStatsDots,
    },
  ];

  return (
    <div className="bg-white w-[18rem] h-full rounded-3xl flex flex-col py-5 shadow-xl">
      <div className="w-full flex justify-center items-center">
        <h1 className="text-4xl font-semibold">iDraft</h1>
      </div>
      <div className="mt-8 px-7">
        <SidebarSection arrayLinks={arrayLinks} />
        <div className="mt-6">
          <SidebarSection
            sectionHeader="INTEGRATIONS"
            arrayLinks={arrayLinks.slice(0, 3)}
          />
        </div>
        <div className="mt-6">
          <SidebarSection
            sectionHeader="INTEGRATIONS"
            arrayLinks={arrayLinks.slice(0, 2)}
          />
        </div>
        <div className="mt-8">
          <Button theme="light">
            <FiSettings className="mr-2" size={24} />
            <span>Settings</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
