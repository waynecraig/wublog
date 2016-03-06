const React = require('react')

const Login = React.createClass({

    render: function(){

        return (
            <div className="login">
                <label>用户名</label>
                <input name="user" type="text"/>
                <label>密码</label>
                <input name="password" type="password"/>
            </div>
        )

    }

});

module.exports = Login;
