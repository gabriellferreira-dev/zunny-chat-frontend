import { Container } from '../styled-components/Container';
import Wallpaper from '../assets/images/wallpaper.jpg';
import { MessageContainer } from '../styled-components/Message';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Typing from './Typing';

export default function MessagesContainer({ socket }) {
  const messagesRef = useRef();

  const [usersTyping, setTyping] = useState(false);

  const { messages } = useSelector((state) => state.Messages);

  const userState = useSelector((state) => state.User);

  useEffect(() => {
    messagesRef.current.scrollTop =
      messagesRef.current.scrollHeight - messagesRef.current.clientHeight;
  }, [messages]);

  useEffect(() => {
    socket.on('typing', (typing) => {
      const data = typing.filter((user) => user._id !== userState.user._id);
      setTyping(data);
    });
  }, [socket, userState.user._id]);

  return (
    <Container wallpaper={Wallpaper}>
      <div ref={messagesRef}>
        {messages.map((data, i) => (
          <MessageContainer
            key={i}
            isCurrentUser={userState.user._id === data.user._id}
          >
            <span>{data.user.name}</span>
            <p>{data.message}</p>
            <span>{data.date}</span>
          </MessageContainer>
        ))}
      </div>
      {usersTyping && (
        <div>
          {usersTyping.map((user) => (
            <Typing key={user._id} user={user} />
          ))}
        </div>
      )}
    </Container>
  );
}
