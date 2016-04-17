import React, { Component, PropTypes } from 'react';

import Paper from 'material-ui/lib/paper';
import AppBar from 'material-ui/lib/app-bar';
import TextField from 'material-ui/lib/text-field';
import FlatButton from 'material-ui/lib/flat-button';

import { login } from '../actions/account'

const loginWrapStyle = {
    textAlign: 'center',
    marginTop: '50px'
}

export default class Login extends Component {

    render() {

        return (
            <div>
                <AppBar title="login" />
                <div style={loginWrapStyle}>
                    <TextField 
                        floatingLabelText='username'
                        ref={(ref)=>this.username=ref}
                    /><br/>
                    <TextField 
                        floatingLabelText='password'
                        type='password'
                        ref={(ref)=>this.password=ref}
                    /><br/><br/>
                    <FlatButton
                        label='login'
                        primary={true}
                        onClick={()=>login(this.username.getValue(), this.password.getValue())}
                    />
                </div>
            </div>
        )

    }

}
