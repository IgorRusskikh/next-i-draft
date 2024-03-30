import { signOut } from 'next-auth/react';
import { useState } from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { FaPlus, FaRegUser } from 'react-icons/fa';
import { IoSearchOutline } from 'react-icons/io5';
import { PiSignOut } from 'react-icons/pi';
import { RiNotification2Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';

import { setModal } from '@/features/modal/modalSlice';
import useCurrentUser from '@/hooks/useCurrentUser';

import ActionMenu from '../ActionMenu';
import IconButton from '../IconButton';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [showActions, setShowActions] = useState(false);

  const dispatch = useDispatch();

  const currentUser = useCurrentUser()?.data?.user;

  const ref = useDetectClickOutside({
    onTriggered: () => {
      setShowActions(false);
    },
  });

  const userActions = [
    { label: "Sign out", actionIcon: PiSignOut, action: signOut },
  ];

  if (currentUser) {
    return (
      <>
        <div className="w-full flex justify-between">
          <h1 className="text-4xl font-bold flex items-end pt-3">
            Hi, {currentUser && currentUser.username}!
          </h1>
          <div className="flex text-md gap-5 pb-5">
            <Button rounded="rounded-full">
              <div className="flex items-center justify-center gap-2 px-5">
                <FaPlus />
                <span>Create</span>
              </div>
            </Button>
            <div className="flex gap-2">
              <IconButton bg={true} theme="dark">
                <IoSearchOutline size={24} />
              </IconButton>
              <IconButton bg={true} theme="dark">
                <RiNotification2Line size={24} />
              </IconButton>
            </div>
            <div className="relative">
              <IconButton
                theme="light"
                bg={true}
                onClick={() => setShowActions(true)}
              >
                <FaRegUser size={24} color="white" />
              </IconButton>
              <div
                className={`absolute right-[240%] bottom-[-20%] z-20 transition-all ${
                  showActions ? "animate-fade-in" : " animate-fade-out"
                }`}
                ref={ref}
              >
                <ActionMenu actions={userActions} direction="top" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="w-full flex justify-between">
      <h1 className="text-4xl font-bold flex items-end pt-3">
        Hi, {currentUser && currentUser.username}!
      </h1>
      <div className="flex text-md gap-5 pb-5">
        <Button rounded="rounded-full">
          <div className="flex items-center justify-center gap-2 px-5">
            <FaPlus />
            <span>Create</span>
          </div>
        </Button>
        <div className="flex gap-2">
          <IconButton bg={true} theme="dark">
            <IoSearchOutline size={24} />
          </IconButton>
          <IconButton bg={true} theme="dark">
            <RiNotification2Line size={24} />
          </IconButton>
        </div>
        <Button rounded="rounded-full" onClick={() => dispatch(setModal(true))}>
          <div className="flex items-center justify-center gap-2 px-5">
            <FaPlus />
            <span>Authorize</span>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Header;
