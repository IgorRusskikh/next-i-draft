import { FaPlus } from 'react-icons/fa';
import { IoSearchOutline } from 'react-icons/io5';
import { RiNotification2Line } from 'react-icons/ri';

import Button from './Button';

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
          text-3xl 
          font-semibold
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
          gap-4
          pb-5
        "
      >
        <Button
          label="Create"
          icon={FaPlus}
          justifyContent="justify-center"
          rounded="rounded-full"
        />
        <Button
          icon={IoSearchOutline}
          justifyContent="justify-center"
          rounded="rounded-full"
          theme="light"
        />
        <Button
          icon={RiNotification2Line}
          justifyContent="justify-center"
          rounded="rounded-full"
          theme="light"
        />
      </div>
    </div>
  );
};

export default Header;
