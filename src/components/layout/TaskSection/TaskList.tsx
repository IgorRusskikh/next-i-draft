import TaskCard from '@/components/TaskCard/TaskCard';
import useTasks from '@/hooks/useTasks';

const TaskList: React.FC = () => {
  const tasks = useTasks()?.data?.tasks;

  console.log(tasks)

  return (
    <div className="flex flex-wrap gap-5">
      {tasks?.length > 0 && tasks.map(task => (
        <div key={task.id} className="min-w-[28.5rem] max-w-[28.5rem] h-auto min-h-[10rem]">
          <TaskCard title={task.title} status={task.taskState.state} content={task.content} />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
