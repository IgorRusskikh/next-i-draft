import { useDetectClickOutside } from 'react-detect-click-outside';

interface ModalWindowProps {
  isOpen?: boolean;
  onClose: () => void;
  title: string;
  body: JSX.Element;
  footer?: JSX.Element;
}

const Modal: React.FC<ModalWindowProps> = ({
  isOpen,
  onClose,
  title,
  body,
}) => {
  const ref = useDetectClickOutside({
    onTriggered: () => {
      onClose();
    },
  });

  if (!isOpen) {
    return null;
  }

  return (
    <div className="absolute w-full h-full z-20 backdrop-blur-xl">
      <div className="w-full h-full flex justify-center items-center">
        <div
          className="px-6 py-6 w-[40rem] bg-white rounded-3xl flex flex-col items-center drop-shadow-xl"
          ref={ref}
        >
          <h1 className="text-3xl mb-10">{title}</h1>
          {/* MODAL WINDOW BODY */}
          {body}
        </div>
      </div>
    </div>
  );
};

export default Modal;
