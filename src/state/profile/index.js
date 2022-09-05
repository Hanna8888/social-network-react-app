// types
import types from './types';

// initial state
let initialState = {
    postData: [
        { desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ' +
                'industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and ' +
                'scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into ' +
                'electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of ' +
                'Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus ' +
                'PageMaker including versions of Lorem Ipsum.', likesCounter: '23 likes' },
        { desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at ' +
                'its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed ' +
                'to using \'Content here, content here\', making it look like readable English.', likesCounter: '23 likes' }
    ],
    profile: null,
    status: ''
}

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case types.ADD_MESSAGE_PROFILE: {
            return {
                ...state,
                postData: [...state.postData, { desc: action.message, likesCounter: 12 }],
            }
        }

        case types.SET_PROFILE_USER: {
            return {
                ...state,
                profile: action.profile
            }
        }

        case types.SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }

        case types.SET_PHOTO: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }

        default:
            return state
    }
}
