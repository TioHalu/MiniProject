import React from 'react';
import { Card, ButtonFilled, ButtonOutlined, TextField } from '../../component/elements';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function LoginUser ({ classes }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(false);

  const _handleLogin = () => {
    const user = Cookies.get('username');
    const pass = Cookies.get('password');
    if (username === user && password === pass) {
      window.location.pathname = '/home-mahasiswa';
    }
    else {
      setError(true);
    }
  }
  return (
    <div className={classes.container}>
      
      <Card>
        <h1>Login User</h1>
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
