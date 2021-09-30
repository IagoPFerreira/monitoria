import React, { Component } from 'react';
import { getAllUsers } from '../services/fetchAPI';
import UserCard from './UserCard';
import '../styles/style.css'

class UserList extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      userList: [],
    };
  }

  async componentDidMount() {
    console.log('mount');
    this.getUser()
  }

  getUser = async () => {
    const users = await getAllUsers()
    this.setState({
      userList: users,
      isLoading: false
    })

    // console.log(users);
  }

  renderUserList = () => {
    const { userList } = this.state;
    console.log('oi');
    return userList.map((user) => (<UserCard user={ user } />))
  }

  render() {
    const { isLoading } = this.state;
    
    console.log('render');
    return (
      <main className="user-list">
        { isLoading ? <span>...Carregando</span> : this.renderUserList() }
      </main>
    );
  }
}

export default UserList;