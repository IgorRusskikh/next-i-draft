import { useState } from 'react';
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
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const dispatch = useDispatch();

  const isOpen = useSelector((state) => state.modalCreateTask);

  const modalBody = (
    <div className="flex flex-col gap-10 w-full">
      <div className="w-full">
        <Input placeholder="Title" value={title} setValue={setTitle} />
      </div>
      <div className="w-full">
        <Input
          placeholder="Description task"
          value={description}
          setValue={setDescription}
        />
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
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </div>
      </div>
      <div className="mt-10 flex">
        <Button>
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
