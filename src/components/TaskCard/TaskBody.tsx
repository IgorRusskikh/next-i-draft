const TaskBody: React.FC<{ status: string; children?: string }> = ({ status, children }) => {

  if (children) {
    return (
      <div className="w-full flex flex-col mt-3 text-lg">
        <div className="flex gap-3 items-center">
          <div className="w-[8px] h-[8px] rounded-full bg-green-400"></div>
          <h4 className="text-[#858a96]">{status}</h4>
        </div>
        <div className="mt-3">
          <p className="text-[#858a96]">
            <span className="text-[#cbcbcb]">Done:</span> {children.length > 75 ? children.slice(0, 75) + "..." : children}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col mt-3 text-lg">
      <div className="flex gap-3 items-center">
        <div className="w-[8px] h-[8px] rounded-full bg-green-400"></div>
        <h4 className="text-[#858a96]">{status}</h4>
      </div>
    </div>
  )
}

export default TaskBody;