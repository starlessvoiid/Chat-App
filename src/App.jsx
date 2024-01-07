import { useState } from 'react'
import './App.css'
import Sidebar from "./components/Sidebar"
import MessagesList from "./components/MessagesList"
import AddMessage from "./components/AddMessage"

function App() {
  
  return (
      <div id="container">
        <Sidebar />
        <section id="main">
          <MessagesList />
          <AddMessage />
        </section>
      </div>
  )
}

export default App
