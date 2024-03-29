const TaskCardBody: React.FC<{ task: string }> = ({ task }) => {
  return (
    <div className="flex items-center w-full h-full">
      <h3 className="text-2xl text-start w-fit h-fit">{task}</h3>
    </div>
  );
};

export default TaskCardBody;
