import { CircularProgressbar } from 'react-circular-progressbar';

const TaskHeader: React.FC<{ children: string }> = ({ children }) => {
  return (
    <div className="w-full flex items-center justify-between">
      <h1 className={`font-semibold text-2xl w-fit`}>{children}</h1>
      <div className=" w-10 h-10 relative">
        <div className="w-full h-full absolute">
          <CircularProgressbar
            value={25}
            text="1/4"
            className="w-fit h-fit absolute right-0 top-0"
            strokeWidth={10}
            styles={{
              trail: { stroke: "#9ba1b0" },
              path: { stroke: "#fff" },
              text: {
                fontSize: 26,
                fill: "white",
              },
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default TaskHeader;