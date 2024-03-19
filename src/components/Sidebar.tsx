import { IconType } from 'react-icons';
import { BiTask } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { ImStatsDots } from 'react-icons/im';
import { IoMdCalendar } from 'react-icons/io';
import { MdDashboard } from 'react-icons/md';

import Button from './Button';
import SidebarSection from './SidebarSection';

interface Link {
  label: string;
  url: string;
  icon?: IconType | undefined;
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
    <div
      className="
        bg-white 
        w-68
        h-full 
        rounded-3xl
        flex
        flex-col
        py-5
      "
    >
      <div
        className="
          w-full
          flex
          justify-center
          items-center
        "
      >
        <h1
          className="
            text-3xl 
            font-medium
          "
        >
          iDraft
        </h1>
      </div>
      <div className="mt-12">
        <div className="px-7">
          <div>
            <SidebarSection arrayLinks={arrayLinks} />
          </div>
          <div className="mt-8">
            <SidebarSection
              sectionHeader="INTEGRATIONS"
              arrayLinks={arrayLinks.slice(0, 3)}
            />
          </div>
          <div className="mt-8">
            <SidebarSection
              sectionHeader="INTEGRATIONS"
              arrayLinks={arrayLinks.slice(0, 2)}
            />
          </div>
          <div className="mt-8">
            <Button label="Setting" theme="light" icon={FiSettings} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
