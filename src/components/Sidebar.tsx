import SidebarSection from './SidebarSection';

interface Link {
  label: string;
  url: string;
}

const Sidebar: React.FC = () => {
  const arrayLinks: Link[] = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "About",
      url: "/about",
    },
    {
      label: "Projects",
      url: "/projects",
    },
    {
      label: "Contact",
      url: "/contact",
    },
  ];

  return (
    <div
      className="
        bg-white 
        w-80
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
      <div className="mt-14">
        <div className="px-5">
          <div>
            <SidebarSection arrayLinks={arrayLinks} />
          </div>
          <div className="mt-14">
            <SidebarSection
              sectionHeader="INTEGRATIONS"
              arrayLinks={arrayLinks}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
