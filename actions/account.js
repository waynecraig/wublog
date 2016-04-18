import md5 from 'md5'

export const login = (username, password) => {
    window.location.href = `/login?username=${username}&password=${md5(password)}`
}

export const logout = () => {
    window.location.href = '/logout'
}

export const REQUEST_ACCOUNT_INFO = 'REQUEST_ACCOUNT_INFO'
const requestAccountInfo = () => ({
    type: REQUEST_ACCOUNT_INFO
})

export const RECEIVE_ACCOUNT_INFO = 'RECEIVE_ACCOUNT_INFO'
const receiveAccountInfo = (info) => ({
    type: RECEIVE_ACCOUNT_INFO,
    info
})

export const FETCH_ACCOUNT_INFO_ERROR = 'FETCH_ACCOUNT_INFO_ERROR'
const fetchAccountInfoError = (msg) => ({
    type: FETCH_ACCOUNT_INFO_ERROR,
    msg
})

export const getInfo = () => {

    return dispatch => {

        dispatch(receiveAccountInfo())

        fetch('/cgi-bin/getAccountInfo', {
            method: 'POST'
        }).then(res => res.json())
        .then(json => {
            if (json.code !== 0) {
                dispatch(fetchAccountInfoError(json.msg))
            } else {
                dispatch(receiveAccountInfo(json.info))
            }
        })

    }
}
