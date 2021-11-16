import BottomBar from '../styled-components/Bar';
import { BiSend } from 'react-icons/bi';
import { Button } from '../styled-components/Button';
import { FormMessage } from '../styled-components/FormMessage';
import { Input } from '../styled-components/Input';
import { InsertIcon } from '../styled-components/Icon';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newMessage } from '../store/Actions';

export default function MessageForm({ socket }) {
  const [message, setMessage] = useState();
  const formRef = useRef();

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.User);

  const handleChange = ({ target: { value } }) => {
    socket.emit('typing', user);
    setMessage(value);
  };

  const submitMessage = (e) => {
    e.preventDefault();

    socket.emit('message', message);
    socket.emit('typing', false);

    formRef.current.reset();
  };

  useEffect(() => {
    if (!message) {
      socket.emit('typing', false);
    }
  }, [message, socket]);

  useEffect(() => {
    socket.on('message', (data) => {
      dispatch(newMessage(data));
    });
  }, [dispatch, socket]);

  return (
    <BottomBar bottom>
      <FormMessage ref={formRef} onSubmit={submitMessage}>
        <Button type='button' icon>
          <InsertIcon />
        </Button>
        <Input onChange={handleChange} />
        <Button icon send>
          <BiSend />
        </Button>
      </FormMessage>
    </BottomBar>
  );
}
