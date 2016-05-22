export const REQUEST_BLOG_LIST = 'REQUEST_BLOG_LIST'
const requestBlogList = () => ({
    type: REQUEST_BLOG_LIST
})

export const RECEIVE_BLOG_LIST = 'RECEIVE_BLOG_LIST'
const receiveBlogList = (list) => ({
    type: RECEIVE_BLOG_LIST,
    list
})

export const FETCH_BLOG_LIST_ERROR = 'FETCH_BLOG_LIST_ERROR'
const fetchBlogListError = (msg) => ({
    type: FETCH_BLOG_LIST_ERROR,
    msg
})

export const fetchList = () => {

    return dispatch => {

        dispatch(receiveBlogList())

        fetch('/cgi-bin/getBlogList', {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.json())
        .then(json => {
            if (json.code !== 0) {
                dispatch(fetchBlogListError(json.msg))
            } else {
                dispatch(receiveBlogList(json.list))
            }
        })

    }

}
