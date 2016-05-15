import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Login from './login'
import UserInfo from './userInfo'
import { getInfo } from '../actions/account'

class Account extends Component {

    render() {

        const { isFetching, info, msg } = this.props

        return (
            <div>
                {isFetching ? '加载中' : (
                    msg ? <Login/> : <UserInfo info={info}/>
                )}
            </div>
        )

    }

    componentDidMount() {
        this.props.dispatch(getInfo())
    }

}

export default connect(state=>state)(Account)
