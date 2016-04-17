import md5 from 'md5'

export const LOGIN = 'LOGIN'
export const login = (username, password) => {
    window.location.href = `/login?username=${username}&password=${md5(password)}`
}
