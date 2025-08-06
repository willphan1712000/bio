import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import Cookies from 'js-cookie';
import authStorage from '../../../client/auth/storage'

export const Route = createFileRoute('/@logout')({
  component: RouteComponent,
})

function RouteComponent() {
    useEffect(() => {
        // clear cookies
        Cookies.remove('PHPSESSID')
        // remove token
        authStorage.removeToken()
        // redirect to the login page
        window.location.href = '/@signin'
    }, [])
  return null
}
