import { IconType } from 'react-icons';

import Button from '../Button';

interface Link {
  label: string;
  url: string;
  icon?: IconType;
}

interface SidebarSectionProps {
  sectionHeader?: string;
  arrayLinks: Link[];
}

const SidebarSection: React.FC<SidebarSectionProps> = ({
  sectionHeader,
  arrayLinks,
}) => {
  return (
    <nav className="mb-4">
      {sectionHeader && (
        <h2 className="px-5 text-lg text-black mb-2">{sectionHeader}</h2>
      )}
      <ul className="flex flex-col list-none gap-2">
        {arrayLinks.map(({ label, url, icon: Icon }) => (
          <li key={label}>
            <Button theme="light">
              {Icon && <Icon className="mr-2" size={24} />}
              <span className="text-lg">{label}</span>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarSection;
