import React, { useCallback } from 'react';
import { Card, ButtonFilled, ButtonOutlined, TextField } from '../../component/elements';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API } from '../../configs';

export default function LoginUser({ classes }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(false);


      
    

  const _handleLogin = useCallback(() => {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    let config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        'Access-Control-Allow-Origin': '*',
      }
    }
    let data = {
      "username": username,
      "password": password
    }

    axios.post(API.profileUser, data, config)
      .then((response) => {
        localStorage.setItem('token', response.data.token);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [username, password])
  
  return (
    <div className={classes.container}>
      
      <Card>
        <h1>Login dengan API</h1>
        <TextField
          label="Username"
          {...username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField  
          label="Password"
          {...password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p>Username atau Password salah</p>}
        <div className={classes.buttonWrapper}>
          <ButtonOutlined className="button" onClick={() => window.location.pathname = '/'}>Kembali</ButtonOutlined>
          <ButtonFilled className="button" onClick={_handleLogin}>Login</ButtonFilled>
        </div>
        <p>Belum punya akun? <Link to="/register-mahasiswa">Daftar</Link></p>
      </Card>
    </div>
  );
}
