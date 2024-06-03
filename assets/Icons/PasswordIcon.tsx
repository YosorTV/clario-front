import { FC } from 'react';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';

export const ShowPassIcon: FC<{ isOpened: boolean; onClick: () => void }> = ({
  onClick,
  isOpened = false,
}) => {
  return (
    <span onClick={onClick} aria-hidden>
      {isOpened ? (
        <FaEye width={16} height={16} fill='black' />
      ) : (
        <FaEyeSlash width={16} height={16} fill='black' />
      )}
    </span>
  );
};
