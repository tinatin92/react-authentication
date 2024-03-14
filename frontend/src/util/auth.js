import {redirect} from 'react-router-dom'

export function getTokenDuration() {
    const storedexpirationDate = localStorage.getItem('experation')
    const expirationDate = new Date(storedexpirationDate)
    const now = new Date()
    const duration = expirationDate.getTime() - now.getTime()

    return duration

}


export function getAuthToken() {
    const token = localStorage.getItem('token')
    const tokenDuration = getTokenDuration()

    if(!token) {
        return null
    }
    
    if(tokenDuration < 0) {
        return 'EXPIRED'
    }


    return token
}

export function tokelLoader() {
    return getAuthToken()
}

export function checkAuthToken () {
    const token = getAuthToken()
  

    if(!token){
        return redirect('/')
    }

    return null
}