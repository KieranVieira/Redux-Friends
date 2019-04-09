import React from 'react';

const FriendForm = props => {
    return (
        <form onChange={props.handleChange} onSubmit={props.handleSubmit}>
            <input type="text" placeholder="name" name="name" />
            <input type="number" placeholder="age" name="age" />
            <input type="text" placeholder="email" name="email" />
            <button type="submit">Add Friend</button>
        </form>
    )
}

export default FriendForm