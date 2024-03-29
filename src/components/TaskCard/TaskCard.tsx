import { IconType } from 'react-icons';

import Box from '../layout/Box';
import TaskCardBody from './TaskCardBody';
import TaskCardFooter from './TaskCardFooter';
import TaskCardHeader from './TaskCardHeader';

interface TaskCardProps {
  icon?: IconType;
  task: string;
  deadline: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ icon, task, deadline }) => {
  return (
    <Box
      customBoxHeader={<TaskCardHeader icon={icon} />}
      boxBody={<TaskCardBody task={task} />}
      boxFooter={<TaskCardFooter deadline={deadline} />}
    />
  );
};

export default TaskCard;
