import {
    default as React,
    Component,
    PropTypes
} from 'react';

import Paper from 'material-ui/lib/paper';
import AppBar from 'material-ui/lib/app-bar';

export default class Login extends Component {

    render() {

        return (
            <Paper>
                <AppBar
                    title="login"
                />
            </Paper>
        )

    }

}
