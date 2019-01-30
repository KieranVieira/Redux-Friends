import {
    FETCH_FRIENDS_START,
    FETCH_FRIENDS_SUCCESS,
    FETCH_FRIENDS_FAILURE
} from '../actions'

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    friends: [],
    error: null
}

export const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_FRIENDS_START:
            return{
                ...state
            }
        case FETCH_FRIENDS_SUCCESS:
            return {
                ...state
            }
        case FETCH_FRIENDS_FAILURE:
            return{
                ...state
            }
        default:
            return state;
    }
} 