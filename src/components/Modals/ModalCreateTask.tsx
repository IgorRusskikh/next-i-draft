import { useCallback, useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import { FaRegCheckCircle } from 'react-icons/fa';
import { TbProgress } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';

import { setModal } from '@/features/modalCreateTask/modalCreateTaskSlice';

import ModalWindow from '../layout/Modal';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Select from '../ui/Select';

interface Option {
  label: string;
  icon?: IconType;
}

const CreateTask: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [subtasks, setSubtasks] = useState([{}]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [state, setState] = useState<Option | null>(null);

  const dispatch = useDispatch();

  const isOpen = useSelector((state) => state.modalCreateTask);

  useEffect(() => {
    console.log(subtasks)
  }, [subtasks])

  const createTask = useCallback(async () => {
    const response = await fetch('/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        content,
        startDate,
        monthGoal: false,
        deadline: endDate,
        state: state?.label
      })
    })
  }, [])

  const modalBody = (
    <div className="flex flex-col gap-10 w-full">
      <div className="w-full">
        <Input placeholder="Title" value={title} setValue={setTitle} />
      </div>
      <div className="w-full">
        <Input
          placeholder="Description task"
          value={content}
          setValue={setContent}
        />
      </div>
      <div className="w-full">
        <h4 className='text-center text-xl'>Subtasks</h4>
        <ul className='flex flex-col gap-5 max-h-[13rem] overflow-y-scroll'>
          {subtasks.map((subtask, index) => (
            <li key={index} className='flex items-center gap-5'>
              <h4 className='text-xl'>{index + 1}.</h4>
              <Input
                placeholder={`Subtask ${index + 1}...`}
              />
            </li>
          ))}
        </ul>
        <div className='flex justify-center mt-5'>
          <div className='w-[10rem]'>
            <Button onClick={() => setSubtasks([...subtasks, ""])}>
              <div className='flex justify-center w-full'>
                Add subtask
              </div>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-10 w-full">
        <div className="w-full">
          <Input
            placeholder="Start date"
            value={startDate}
            setValue={setStartDate}
          />
        </div>
        <div className="w-full">
          <Input placeholder="End date" value={endDate} setValue={setEndDate} />
        </div>
      </div>
      <div className="flex justify-between items-center gap-10 w-full">
        <div className="w-full">
          <h3 className="text-xl pl-4">Select task status</h3>
        </div>
        <div className="w-full">
          <Select
            options={[
              { label: "In progress", icon: TbProgress },
              { label: "Complete", icon: FaRegCheckCircle },
            ]}
            selectedOption={state}
            setSelectedOption={setState}
            defaultLabel='Status'
            theme='light'
          />
        </div>
      </div>
      <div className="mt-5 flex">
        <Button onClick={createTask}>
          <div className="w-full flex justify-center">Add task</div>
        </Button>
      </div>
    </div>
  );

  return (
    <ModalWindow
      isOpen={isOpen.value}
      onClose={() => dispatch(setModal(false))}
      title="Create new task"
      body={modalBody}
    />
  );
};

export default CreateTask;
