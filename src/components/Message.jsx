import React from 'react'
import PropTypes from "prop-types"

const Message = ({message, author}) => {
  return (
    <p style={{marginBottom: "5px"}}>
        <i>{author}</i> &gt; {message}
    </p>
  )

Message.PropTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}
}

export default Message