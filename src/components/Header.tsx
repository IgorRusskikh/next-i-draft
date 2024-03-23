import { FaPlus } from 'react-icons/fa';
import { IoSearchOutline } from 'react-icons/io5';
import { RiNotification2Line } from 'react-icons/ri';

import Button from './Button';
import IconButton from './IconButton';

const Header: React.FC = () => {
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
        Hi, Dilan!
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
      </div>
    </div>
  );
};

export default Header;
