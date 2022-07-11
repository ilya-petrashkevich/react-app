import React, { useEffect, useState } from 'react';
import UserCards from '../Components/Users/UserCards';
import { IUser } from '../Components/Users/IUser';
// import http from '../http';
import Spinner from '../Components/Spinner/Spinner';
import AddUser from '../Components/Users/AddUser';
import { useSearch } from '../Hooks/useSearch';
import Search from '../Components/Users/search';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { getUsers } from '../store/action-creater/users';
import { useActions } from '../Hooks/useActions';
import { useTypedSelector } from '../Hooks/useTypedSelectors';

const Users = () => {
  const [showUserForm, setShowUserForm] = useState(false);
  // const [users, setUsers] = useState<IUser[]>([]);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const { users } = useTypedSelector( state => state.users) //useSelector<RootState>(state => state.users);
  const searchedUsers = useSearch(users, search);
  const {getUsers} = useActions();

  //1. take out search component

  useEffect(() => {
    getUsers();
    // dispatch({})
  }, []);

  // const getUsers = () => {
  //   http.get('users').then(res => {
  //     setUsers(res.data);
  //   }).catch(err => console.log(err));
  //   // const users:{ data: IUser[]} = await http.get('users');
  //   // setUsers(users.data);
  // };

  // const deleteUser = (id?: number) => {
  //   const isDelete = confirm('Really delete this user?');
  //   if (isDelete) {
  //     setUsers(users.filter(user => user.id !== id));
  //   }
  // };

  return (
    <>
      <div className="container mt-5">
        <h1 className="mb-5">Users</h1>
        <Search setSearch={setSearch}/>
        {/*<div className="input-group mb-3">*/}
        {/*  <span className="input-group-text" id="basic-addon1">Search</span>*/}
        {/*  <input type="text"*/}
        {/*         className="form-control"*/}
        {/*         placeholder="Name"*/}
        {/*         onChange={(event) => setSearch(event.target.value)}*/}
        {/*  />*/}
        {/*</div>*/}
        <button className="btn btn-success mb-5" onClick={() => setShowUserForm(!showUserForm)}>Add user</button>
        {/*{showUserForm && <AddUser users={users} setUsers={setUsers}/>}*/}
      </div>
      {
        users.length
          ?
          <UserCards users={searchedUsers} /> //deleteUser={deleteUser}
          :
          <Spinner/>
      }
    </>
  );
};

export default Users;