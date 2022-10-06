import React from 'react';
import { Card, ButtonFilled, ButtonOutlined, TextField } from '../../component/elements';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { REGEX } from '../../configs';

export default function RegisterMahasiswa({ classes }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [nama, setNama] = React.useState('');
  const [nim, setNim] = React.useState('');
  const [error, setError] = React.useState(false);
  const [errorText, setErrorText] = React.useState('');

  const _handleRegister = () => {
    if (username === '' || password === '' || nama === '' || nim === '') {
      setError(true);
      setErrorText('Semua field harus diisi');
    } else if (REGEX.number.test(nama)) {
      setError(true);
      setErrorText('Nama harus berupa huruf dan Angka');
    } else if (nama.length <= 3) {
      setError(true);
      setErrorText('Nama minimal 4 karakter');
    } else if (nama.length >= 30) {
      setError(true);
      setErrorText('Nama maksimal 30 karakter');
    } else if (nim.length !== 10) {
      setError(true);
      setErrorText('NIM harus 10 karakter');
    } else if (!REGEX.number.test(nim)) {
      setError(true);
      setErrorText('NIM harus berupa angka');
    } else if (REGEX.checkUpperCase.test(username)) {
      setError(true);
      setErrorText('Username harus berupa huruf kecil');
    } else if (!REGEX.checkUpperCase.test(password)) {
      setError(true);
      setErrorText('Password harus berupa huruf kecil, huruf besar, angka dan simbol');
    }
else {
      Cookies.set('username', username);
      Cookies.set('password', password);
      Cookies.set('nama', nama);
      Cookies.set('nim', nim);
      window.location.pathname = '/login-user';
    }
  }

  return (
    <div className={classes.container}>
      <Card>
        <h1>Register Mahasiswa</h1>
        <TextField
          label="Nama"
          {...nama}
          onChange={(e) => setNama(e.target.value)}
        />
        
        <TextField
          label="Nim"
          {...nim}
          onChange={(e) => setNim(e.target.value)}
        />
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
        {error && <p>{errorText}</p>}
        <div className={classes.buttonWrapper}>
          <ButtonOutlined className="button" onClick={() => window.location.pathname = '/'}>Kembali</ButtonOutlined>
          <ButtonFilled className="button" onClick={_handleRegister}>Register</ButtonFilled>
        </div>
        <p>Sudah punya akun? <Link to="/login-mahasiswa">Login</Link></p>
      </Card>
    </div>
  );
}
