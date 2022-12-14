// types
import types from './types';

// initial state
let initialState = {
    messagesData: [
        { message: 'Hello!' },
        { message: 'How are you?' },
        { message: 'What is your mood?' },
    ]
}

export default function reducer(state = initialState, action) {

    switch (action.type) {

        case types.ADD_MESSAGE_DIALOGS: {
            return {
                ...state,
                messagesData: [...state.messagesData, { message: action.message }]
            }
        }

        default:
            return state
    }
}
