export const OPERATING_BLOG = 'OPERATING_BLOG'
const requestBlogList = () => ({
    type: OPERATING_BLOG
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

export const fetchList = (page=0) => {

    return dispatch => {

        dispatch(receiveBlogList())

        fetch('/cgi-bin/getBlogList', {
            method: 'POST',
            credentials: 'include'
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept": "application/json"
            },
            body: `page=${page}`
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
