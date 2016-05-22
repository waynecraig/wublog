import React, { Component, PropTypes } from 'react';

import Paper from 'material-ui/lib/paper';
import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import MyEditor from '../views/editor'

import { logout } from '../actions/account'

const editorStyle = {
    height: '600px',
    padding: '15px'
}

export default class Login extends Component {

    render() {

        return (
            <div>
                <AppBar 
                    title={this.props.info} 
                    iconElementRight={<FlatButton label="Logout" onClick={()=>logout()}/>}
                />
                <Toolbar>
                    <ToolbarGroup firstChild={true} float='left'>
                        <FlatButton label='保存'/>
                        <FlatButton label='发布'/>
                    </ToolbarGroup>
                </Toolbar>
                <Paper style={editorStyle}>
                    <MyEditor/>
                </Paper>
            </div>
        )

    }

}
