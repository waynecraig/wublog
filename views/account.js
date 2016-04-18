import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Login from './login'
import FlatButton from 'material-ui/lib/flat-button'

import {
    logout,
    getInfo
} from '../actions/account'

class Account extends Component {

    render() {

        const { isFetching, info, msg } = this.props

        return (
            <div>
                {isFetching ? '加载中' : (
                  msg ? <Login/> : (
                      info ? (
                          <div>
                              <p>{info}</p>
                              <FlatButton
                                  label='退出'
                                  onClick={()=>logout()}
                              />
                          </div>
                      ) : null
                  )
                )}
            </div>
        )

    }

    componentDidMount() {
        this.props.dispatch(getInfo())
    }

}

export default connect(state=>state)(Account)
