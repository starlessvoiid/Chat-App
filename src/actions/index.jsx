import * as types from "../constants/ActionTypes"

let nextMessageId = 0
let nextUserId = 0

export const addMessage = (message, author) => {
    return {
        type: types.ADD_MESSAGE,
        payload: {
            id: nextMessageId++,
            message: message,
            author: author
        }
    }
}

export const addUser = (name) => {
    return {
        type: types.ADD_USER,
        payload: {
            id: nextUserId++,
            name : name
        }
    }
}

export const messageReceived = (message, author) => {
    return {
        type: types.MESSAGE_RECEIVED,
        payload: {
            id: nextMessageId++,
            message: message,
            author: author
        }
    }
}

export const populateUsersList = (users) => {
    return {
        type: types.USERS_LIST,
        payload: users
    }
}