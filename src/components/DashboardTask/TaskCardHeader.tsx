import { useState } from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { IconType } from 'react-icons';
import { BiNotepad } from 'react-icons/bi';
import { BsPinAngle, BsThreeDots } from 'react-icons/bs';
import { CiGift } from 'react-icons/ci';
import { GoPencil } from 'react-icons/go';

import ActionMenu from '../ActionMenu';
import IconButton from '../IconButton';

const TaskCardHeader: React.FC<{ icon?: IconType }> = ({ icon: Icon }) => {
  const [showActions, setShowActions] = useState(false);

  const ref = useDetectClickOutside({
    onTriggered: () => {
      setShowActions(false);
    },
  });

  return (
    <>
      <div
        ref={ref}
        className={`${
          !showActions ? "animate-fade-out" : "animate-fade-in"
        } animate-fade-in absolute z-10 right-[57.5%] bottom-[125%]`}
      >
        <ActionMenu
          actions={[
            { label: "Pin", action: () => {}, actionIcon: BsPinAngle },
            { label: "Edit", action: () => {}, actionIcon: GoPencil },
          ]}
        />
      </div>
      <div className="w-full flex items-center justify-between relative">
        {Icon ? <CiGift size={42} /> : <BiNotepad size={42} />}
        <IconButton
          onClick={() => {
            setShowActions(!showActions);
          }}
        >
          <BsThreeDots size={32} />
        </IconButton>
      </div>
    </>
  );
};

export default TaskCardHeader;
