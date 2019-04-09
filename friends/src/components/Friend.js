import React from 'react'

const Friend = props => {
    return(
        <div>
        <h1>{props.friendData.name}</h1>
        <h2>{props.friendData.age}</h2>
        <h2>{props.friendData.email}</h2>
        <button onClick={e => props.deleteFriend(e,props.friendData.id)}>delete</button>
        <button>update</button>
        </div>
    )
}

export default Friend