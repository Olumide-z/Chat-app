import React from 'react';
import Input from '../messages/input/Input';
import Messages from '../messages/Messages';
import './chat.css';
import { useContext } from 'react';
import { ChatContext } from '../../context/ChatContext';

const Chat = () => {
   const { data } = useContext(ChatContext);
  return (
    <div className="chat">
      
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src="/images/cam.png" alt="cam" />
          <img src="/images/add.png" alt="add" />
          <img src="/images/more.png" alt="more" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat