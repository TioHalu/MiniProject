import React from 'react';
import Cookies from 'js-cookie';
import { Card, ButtonOutlined, } from '../../component/elements';
import { Button, Modal } from 'antd';

export default class HomeMahasiswa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      nim: '',
      nama: '',
      error: false,
    }
  }

  componentDidMount() {
    const user = Cookies.get('username');
    const pass = Cookies.get('password');
    const nim = Cookies.get('nim');
    const nama = Cookies.get('nama');
    this.setState({
      username: user,
      password: pass,
      nim: nim,
      nama: nama,
    })
    if( user === undefined || pass === undefined || nim === undefined || nama === undefined ) {
      window.location.pathname = '/';
    }
    
  }
  handleLogout = () => {
    Cookies.remove('username');
    Cookies.remove('password');
    Cookies.remove('nim');
    Cookies.remove('nama');
    window.location.pathname = '/';
  }
  handleOk = () => {
    window.location.pathname = '/';
  }
  handleCancel = () => {
    window.location.pathname = '/';
  }
  render() {
    const { username, nim, nama } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Card>
          <h1>Selamat datang {nama}</h1>
          <p>Username: {username}</p>
          <p>NIM: {nim}</p>
          <div className={classes.buttonWrapper}>
            <ButtonOutlined className="button" onClick={this.handleLogout}>Logout</ButtonOutlined>
          </div>
        </Card>
      </div>
    );
  }
}