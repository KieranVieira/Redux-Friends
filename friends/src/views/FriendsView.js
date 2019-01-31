import React from 'react';
import { connect } from "react-redux";

import { fetchFriends, addFriend } from '../store/actions'

import FriendsList from "../components/FriendsList";
import FriendForm from '../components/FriendForm'


class FriendsView extends React.Component{
    state = {
        friends: [],
        friend: {
            name:'',
            age:'',
            email:''
        }
    }
    
    componentDidMount(){
        this.props.fetchFriends()
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addFriend(this.state.friend);
    }

    render(){
        return(
            <>
                <FriendsList friends={this.props.friends}/>
                <FriendForm handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
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
        fetchFriends,
        addFriend
    }
)(FriendsView)