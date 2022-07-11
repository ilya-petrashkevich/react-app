import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IUser } from '../Components/Users/IUser';
import http from '../http';


const initialValue: IUser = {
  name: '',
  username: '',
  email: '',
  phone: '',
  website: ''
};

const User = () => {
  const [user, setUser] = useState(initialValue);// или "" пустая строка, надо уточнить!!!!!!!!!!!!!!!!!
  const {id} = useParams();
  console.log(id);

  //useEffect(fetch user on id in get request)
  useEffect(() => {
    getUser( id );
  }, []);

  //getUser()
  const getUser = (id: any) => {
    http.get(`users/${id}`).then( res => {
      // const user: { data: IUser } = await http.get(`users/${id}`);
      setUser( res.data );
    }).catch(err => console.log(err));
  };
  //render user
  return (
      <div className="col" key={user.id}>
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <p className="card-text">Email: {user.email}</p>
            <p className="card-text">Phone: {user.phone}</p>
            <p className="card-text">Company: {user.company?.name}</p>
          </div>
        </div>
      </div>
  );
};

export default User;