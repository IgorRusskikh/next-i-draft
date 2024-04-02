import Box from '../layout/Box';
import TaskBody from './TaskBody';
import TaskHeader from './TaskHeader';

interface TaskCardProps {
  title: string;
  content?: string;
  status: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ title, content, status }) => {
  return (
    <Box
      customBoxHeader={<TaskHeader>{title}</TaskHeader>}
      boxBody={<TaskBody status={status}>{content}</TaskBody>} theme='dark' />
  )
}

export default TaskCard;