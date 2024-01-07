import * as types from "../constants/ActionTypes"

const users = (state = [], action) => {
    switch (action.type) {
        case types.ADD_USER: {
            return [...state, action.payload]
        }
        case types.USERS_LIST: {
            return action.payload
        }
        default:
            return state

    }
}

export default users;