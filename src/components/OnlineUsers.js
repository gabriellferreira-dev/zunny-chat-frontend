import { useEffect, useState } from 'react';
import TopBar from '../styled-components/Bar';
import { UserStatusElipse } from '../styled-components/UserStatusElipse';

export default function OnlineUsers({ socket }) {
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    socket.on('onlineUsers', (users) => setOnlineUsers(users));
  }, [socket]);

  return (
    <TopBar top>
      {onlineUsers.map((user) => (
        <UserStatusElipse key={user._id}></UserStatusElipse>
      ))}
    </TopBar>
  );
}
