import React from 'react';
import { connect } from "react-redux";

import { fetchFriends, addFriend, deleteFriend } from '../store/actions'

import FriendsList from "../components/FriendsList";
import FriendForm from '../components/FriendForm'


class FriendsView extends React.Component{
    state = {
        friends: [],
        friend: {
            name:'',
            age:'',
            email:''
        },
        isUpdating: false
    }
    
    componentDidMount(){
        this.props.fetchFriends()
    }

    componentDidUpdate(){
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

    toggleDeleteFriend = (e,id) => {
        e.preventDefault();
        this.props.deleteFriend(id)
    }

    render(){
        return(
            <>
                <FriendsList friends={this.props.friends} deleteFriend={this.toggleDeleteFriend}/>
                <FriendForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} isUpdating={this.state.isUpdating}/>
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
        addFriend,
        deleteFriend
    }
)(FriendsView)