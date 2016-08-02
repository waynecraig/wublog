const objToUrl = obj => Object.keys(obj).map(k=>`${k}=${obj[k]}`).join('&')

export default (REQUEST, RECEIVE, ERROR, cgi, body) => {

    return dispatch => {

        dispatch({type: REQUEST})

        fetch(`/cgi-bin/${cgi}`, {
            method: 'POST',
            credentials: 'include'
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept": "application/json"
            },
            body: objToUrl(body)
        })
        .then(res => res.ok ? res.json() : Promise.reject(res.statusText))
        .then(json => {
            if (json.err) {
                dispatch({type: ERROR, msg: json.err})
            } else {
                dispatch({type: RECEIVE, data: json.data})
            }
        })
        .catch(err => dispatch({type: ERROR, msg: err})

    }

}
