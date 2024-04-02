import { useState } from 'react';
import { GrNotification } from 'react-icons/gr';

const TaskCardFooter: React.FC<{ deadline: string }> = ({ deadline }) => {
  const [notificate, setNotificate] = useState(false);

  const switchNotification = () => {
    setNotificate(!notificate);
  };

  return (
    <div className="flex items-center justify-between">
      <h6 className="text-[#9ba1b0] text-sm">{deadline}</h6>
      <div
        className={`absolute right-0 bottom-0 bg-[#${
          notificate ? "262626" : "transparent"
        }] px-6 py-6 rounded-3xl rounded-tr-none cursor-pointer transition-all duration-300`}
        onClick={switchNotification}
      >
        <GrNotification size={28} color={notificate ? "white" : "black"} />
      </div>
    </div>
  );
};

export default TaskCardFooter;
