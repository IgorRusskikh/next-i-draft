import { ReactNode } from 'react';

interface ProgressBlockProps {
  header?: ReactNode;
  body?: ReactNode;
  theme?: string;
}

const ProgressBlock: React.FC<ProgressBlockProps> = ({
  header: BlockHeader,
  body: BlockBody,
  theme,
}) => {
  return <div className=""></div>;
};

export default ProgressBlock;
