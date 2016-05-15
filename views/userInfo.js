import React, { Component, PropTypes } from 'react';

import Paper from 'material-ui/lib/paper';
import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button';

import { logout } from '../actions/account'

export default class Login extends Component {

    render() {

        return (
            <div>
                <AppBar 
                    title={this.props.info} 
                    iconElementRight={<FlatButton label="Logout" onClick={()=>logout()}/>}
                />
            </div>
        )

    }

}
