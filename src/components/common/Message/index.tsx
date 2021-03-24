import { FC } from 'react';
import { useSelector } from 'react-redux';

import { IRootState } from '@redux';
import { MessageType } from '@models';

export const Message: FC = () => {
  const type = useSelector((state: IRootState) => state.message.type);
  const message = useSelector((state: IRootState) => state.message.message);
  if (type === MessageType.None) {
    return null;
  }
  return <div>{message}</div>;
};
