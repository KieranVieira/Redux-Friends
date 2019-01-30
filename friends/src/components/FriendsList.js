import React from 'react';

import Friend from './Friend'

const FriendsList = (props) => {
    return(
        <>
            {props.friends.map(friend => {
                return <Friend friendData={friend} />
            })}
        </>
    )
}

export default FriendsList;