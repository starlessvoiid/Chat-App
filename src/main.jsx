import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import chat from "./reducers"
import { addUser } from './actions/index.jsx'
import setupSocket from './sockets/index.js'
import createSagaMiddleware from '@redux-saga/core'
import handleNewMessage from "./sagas"
import username from "./utils/name"

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: chat,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

const socket = setupSocket(store.dispatch, username)

sagaMiddleware.run(handleNewMessage, {socket, username})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
    <App />
  </Provider>
)
