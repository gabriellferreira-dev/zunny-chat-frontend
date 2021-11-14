import { useEffect } from 'react';
import MessageForm from '../components/MessageForm';
import MessagesContainer from '../components/MessagesContainer';
import OnlineUsers from '../components/OnlineUsers';
import SideBar from '../components/SideBar';
import Content from '../styled-components/Content';
import { Page } from '../styled-pages/Page';

export default function Home({ socket }) {
  return (
    <Page>
      <SideBar />
      <Content>
        <OnlineUsers socket={socket} />
        <MessagesContainer />
        <MessageForm />
      </Content>
    </Page>
  );
}
