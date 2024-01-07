import React from 'react'
import { useSelector } from 'react-redux'
import Message from './Message'

const MessagesList = () => {

  const messages = useSelector((state) => state.messages)

  return (
    <section id="messages-list">
      <ul>
        {messages.map(message => (
          <Message key= {message.id} {...message} />
        ))}
      </ul>
    </section>
  )
}

export default MessagesList