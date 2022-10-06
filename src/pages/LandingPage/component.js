import React from 'react';
import { Card, ButtonFilled } from '../../component/elements';

export default class LadingPage extends React.Component {

  _handleRouteLoginUser = () => {
    return window.location.pathname = '/login-user';
  }

  _handleRouteLoginMhs = () => {
    return window.location.pathname = '/login-mahasiswa';
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.wrapper}>
        <Card>
          <h1>Selamat Datang </h1>
          <p>Masuk dengan tombol dibawah ini </p>
          <div className={classes.buttonWrapper}>
            <ButtonFilled className="button" onClick={this._handleRouteLoginUser}>User</ButtonFilled>
          </div>
        </Card>
      </div>
    );
  }
}