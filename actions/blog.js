import wrapFetch from '../common/wrapFetch'

export const REQUEST_BLOG_LIST = 'REQUEST_BLOG_LIST'
export const RECEIVE_BLOG_LIST = 'RECEIVE_BLOG_LIST'
export const FETCH_BLOG_LIST_ERROR = 'FETCH_BLOG_LIST_ERROR'

export const REQUEST_BLOG = 'REQUEST_BLOG'
export const RECEIVE_BLOG = 'RECEIVE_BLOG'
export const FETCH_BLOG_ERROR = 'FETCH_BLOG_ERROR'

export const fetchList = (skip=0, limit=0) => (

    wrapFetch(
        REQUEST_BLOG_LIST,
        RECEIVE_BLOG_LIST,
        FETCH_BLOG_LIST_ERROR,
        'listBlog',
        {skip, limit}
    )

)

export const fetchDetail = id => (

    wrapFetch(
        REQUEST_BLOG,
        RECEIVE_BLOG,
        FETCH_BLOG_ERROR,
        'getBlog',
        {id}
    )

)
