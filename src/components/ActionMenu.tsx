import { IconType } from 'react-icons';

interface Action {
  label: string;
  actionIcon?: IconType;
  action: () => void;
}

interface ActionMenuProps {
  actions: Action[];
}

const ActionMenu: React.FC<ActionMenuProps> = ({ actions }) => {
  return (
    <div className="absolute min-w-[12rem] w-fit h-fit bg-[#262626] rounded-2xl z-50">
      <div className="w-full h-full relative">
        <div className="flex flex-col">
          <ul className="text-white text-md py-2 px-2 gap-1">
            {actions.map(({ label, actionIcon: Icon, action }) => (
              <li
                key={label}
                className=">& flex justify-between cursor-pointer transition-all px-3 py-2 rounded-2xl hover:bg-[#cbcbcb] hover:text-black"
                onClick={action}
              >
                {label}
                {Icon && (
                  <div className="flex items-center">
                    <Icon size={20} />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute bottom-0 w-full -z-10 flex justify-center">
          <div className="bg-[#262626] w-10 h-10 rotate-45"></div>
        </div>
      </div>
    </div>
  );
};

export default ActionMenu;
