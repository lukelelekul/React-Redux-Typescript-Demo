import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getMessageDispatcher } from '@redux/dispatchers';
import { IRootState } from '@redux';

const Message: FC = () => {
  // the component will render by Deconstructing object
  // const { type } = useSelector((state: IRootState) => state.message);
  const type = useSelector((state: IRootState) => state.message.type);
  const message = useSelector((state: IRootState) => state.message.message);

  const dispatch = useDispatch();
  const messageDispatcher = getMessageDispatcher(dispatch);

  console.log(type, message);

  return (
    <div className="c-redux-message">
      <button onClick={() => messageDispatcher.info('this is the information')}>info</button>
      <button onClick={() => messageDispatcher.warn('this is the warning')}>warn</button>
      <button onClick={() => messageDispatcher.error('this is the error')}>error</button>
      <button onClick={() => messageDispatcher.dismiss()}>dismiss</button>
    </div>
  );
};

export default Message;
