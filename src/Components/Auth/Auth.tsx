import React, {useContext, useState} from 'react';
import http from '../../http';
import Context from '../../Context/context';

const Auth = () => {
  const [userLogin, setUserLogin] = useState('mor_2314');
  const [userPassword, setUserPassword] = useState('83r5^_');

  //1. Add input for loginData
  //2. After success request change setIsAuth:true
  const { setIsAuth, setOpenModal } = useContext(Context);
  const JSON_URL  = 'https://fakestoreapi.com/auth/login';
  const login = () => {
    // event.preventDefault()
    http.post(JSON_URL, { username: userLogin, password: userPassword }).then(res => {
      localStorage.setItem('token', res.data.token)
      console.log(res);
      (res.status == 200 || res.status == 204) ? setIsAuth(true) : setIsAuth(false);
      setOpenModal(false);
    });

  };
  return (
      <>
          {/*<p>{`isAuth ${isAuth}`}</p>*/}
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text" id="username">log</span>
          <input type="text" className="form-control" aria-label="Sizing example input"
                 aria-describedby="inputGroup-sizing-sm"
                 value={userLogin}
                 onChange={event => setUserLogin(event.target.value)}
          />
        </div>

        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text" id="password">pas</span>
          <input type="password" className="form-control" aria-label="Sizing example input"
                 aria-describedby="inputGroup-sizing-sm"
                 value={userPassword}
                 onChange={event => setUserPassword(event.target.value)}
          />
        </div>

        <button className="btn btn-success" onClick={login}>Login</button>

      </>
  );
};

export default Auth;