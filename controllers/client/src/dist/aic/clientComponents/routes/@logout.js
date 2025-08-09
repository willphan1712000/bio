import { createFileRoute } from '@tanstack/react-router';
import { useEffect } from 'react';
import auth from '../../../client/auth/auth';
export const Route = createFileRoute('/@logout')({
    component: RouteComponent,
});
function RouteComponent() {
    useEffect(() => {
        auth.logout();
    }, []);
    return null;
}
