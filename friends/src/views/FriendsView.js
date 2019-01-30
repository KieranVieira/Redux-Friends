import React from 'react';
import { connect } from "react-redux";

import FriendsList from "../components/FriendsList";
import { fetchFriends } from '../actions'

class FriendsView extends React.Component{
    componentDidMount(){
        this.props.fetchFriends()
    }

    render(){
        return(
            <>
                <FriendsList friends={this.props.friends}/>
            </>
        )
    }
}

const mapStateToProps = state => {
    return{
        friends: state.friends,
    }
}

export default connect(
    mapStateToProps,
    {
        fetchFriends
    }
)(FriendsView)