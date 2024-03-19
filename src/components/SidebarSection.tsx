import { IconType } from 'react-icons';

import Button from './Button';

interface Link {
  label: string;
  url: string;
  icon?: IconType | undefined;
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
    <nav>
      {sectionHeader && (
        <h2
          className="
            px-5 
            text-lg 
            text-black
            mb-2
          "
        >
          {sectionHeader}
        </h2>
      )}
      <ul
        className="
          flex 
          flex-col  
          list-none
          gap-2
        "
      >
        {arrayLinks.map((link) => (
          <li key={link.label}>
            <Button label={link.label} icon={link?.icon} theme="light" />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarSection;
