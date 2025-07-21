import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import Cookies from 'js-cookie';

export const Route = createFileRoute('/@logout')({
  component: RouteComponent,
})

function RouteComponent() {
    useEffect(() => {
        // clear cookies
        Cookies.remove('PHPSESSID')
        // redirect to the login page
        window.location.href = '/@signin'
    }, [])
  return null
}
