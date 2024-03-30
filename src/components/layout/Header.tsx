import { FaPlus, FaRegUser } from 'react-icons/fa';
import { IoSearchOutline } from 'react-icons/io5';
import { RiNotification2Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';

import { setModal } from '@/features/modal/modalSlice';
import useCurrentUser from '@/hooks/useCurrentUser';

import IconButton from '../IconButton';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const currentUser = useCurrentUser()?.data?.user;

  return (
    <div
      className="
        w-full
        flex
        justify-between 
      "
    >
      <h1
        className="
          text-4xl 
          font-bold
          flex 
          items-end 
          pt-3
        "
      >
        Hi, {currentUser && currentUser.username}!
      </h1>
      <div
        className="
          flex
          text-md
          gap-5
          pb-5
        "
      >
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
        {currentUser ? (
          <IconButton theme="light" bg={true}>
            <FaRegUser size={24} color="white" />
          </IconButton>
        ) : (
          <Button
            rounded="rounded-full"
            onClick={() => dispatch(setModal(true))}
          >
            <div className="flex items-center justify-center gap-2 px-5">
              <FaPlus />
              <span>Authorize</span>
            </div>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
