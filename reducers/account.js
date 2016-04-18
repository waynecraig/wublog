import {
    REQUEST_ACCOUNT_INFO,
    RECEIVE_ACCOUNT_INFO,
    FETCH_ACCOUNT_INFO_ERROR
} from '../actions/account'

export default (state = {
    isFetching: false,
    info: null,
    msg: null
}, action) => {
    switch (action.type) {
        case REQUEST_ACCOUNT_INFO:
            return {isFetching: true, info: null, msg: null}
        case RECEIVE_ACCOUNT_INFO:
            return {isFetching: false, info: action.info, msg: null}
        case FETCH_ACCOUNT_INFO_ERROR:
            return {isFetching: false, info: null, msg: action.msg}
        default:
            return state
    }
}
