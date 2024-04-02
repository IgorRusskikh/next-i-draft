import { FaThList } from 'react-icons/fa';
import { IoGrid } from 'react-icons/io5';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

import Select from '../../ui/Select';
import TaskList from './TaskList';

const TaskListSection: React.FC = () => {
  return (
    <div className="w-full flex flex-col mt-5">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold">Last Projects</h2>
        <div className="flex items-center gap-5">
          <Select
            defaultLabel="Sort by"
            defaultIcon={MdOutlineKeyboardArrowDown}
            options={[{ label: "s" }]}
            theme="transparent"
          />
          <div className="px-1 py-1 bg-white h-fit rounded-lg cursor-pointer">
            <IoGrid size={28} />
          </div>
          <div className="px-1 py-1 h-fit rounded-lg cursor-pointer">
            <FaThList size={28} />
          </div>
        </div>
      </div>
      <TaskList />
    </div>
  );
};

export default TaskListSection;
