import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getMessageDispatcher } from '@redux/dispatchers';
import { IRootState } from '@redux';

const Message: FC = () => {
  // the component will render by Deconstructing object
  // const { type } = useSelector((state: IRootState) => state.message);
  const type = useSelector((state: IRootState) => state.message.type);

  const dispatch = useDispatch();
  const messageDispatcher = getMessageDispatcher(dispatch);

  console.log(type, typeof type);

  return (
    <div className="c-redux-message">
      <button onClick={() => messageDispatcher.info('message test')}>info</button>
      <button>warn</button>
      <button>error</button>
      <button onClick={() => messageDispatcher.dismiss()}>dismiss</button>
    </div>
  );
};

export default Message;
