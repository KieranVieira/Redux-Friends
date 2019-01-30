import axios from 'axios'

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAILURE = 'FETCH_FRIENDS_FAILURE';

export const fetchFriends = () => dispatch => {
    dispatch({ type: FETCH_FRIENDS_START })
    axios.get('http://localhost:5000/api/friends')
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

export const saveFriend = () => {}

export const deleteFriend = () => dispatch => {}

export const updateFriend = () => dispatch => {}