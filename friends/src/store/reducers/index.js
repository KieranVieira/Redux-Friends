import {
    FETCH_FRIENDS_START,
    FETCH_FRIENDS_SUCCESS,
    FETCH_FRIENDS_FAILURE,
    ADD_FRIEND_START,
    ADD_FRIEND_SUCCESS,
    ADD_FRIEND_FAILURE,
    DELETE_FRIEND_START,
    DELETE_FRIEND_SUCCESS,
    DELETE_FRIEND_FAILURE
} from '../actions'

const initialState = {
    isFetchingFriends: false,
    isSavingFriends: false,
    isUpdatingFriend: false,
    isDeletingFriend: false,
    isAddingFriend: false,
    friends: [],
    error: null
}

export const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_FRIENDS_START:
            return{
                ...state,
                isFetchingFriends: true,
                error: ''
            }
        case FETCH_FRIENDS_SUCCESS:
            return {
                ...state,
                isFetchingFriends: false,
                friends: action.payload,
                error: ''
            }
        case FETCH_FRIENDS_FAILURE:
            return{
                ...state,
                isFetchingFriends: false,
                error: action.payload
            }
        case ADD_FRIEND_START:
            return{
                ...state,
                isAddingFriend: true,
                error: ''
            }
        case ADD_FRIEND_SUCCESS:
            return{
                ...state,     
                isAddingFriend: false,
                friends: action.payload,
                error: '' 
            }
        case ADD_FRIEND_FAILURE:
            return{
                ...state,
                isAddingFriend: false,
                error: action.payload        
            }
        case DELETE_FRIEND_START:
            return{
                ...state,
                isDeletingFriend: true,
                error: ''       
            }
        case DELETE_FRIEND_SUCCESS:
            return{
                ...state,
                isDeletingFriend: false,
                friend: action.payload,
                error: ''        
            }
        case DELETE_FRIEND_FAILURE:
            return{
                ...state,
                isDeletingFriend: false,
                error: action.payload        
            }
        default:
            return state;
    }
} 