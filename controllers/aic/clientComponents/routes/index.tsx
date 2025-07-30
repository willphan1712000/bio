import { createFileRoute } from '@tanstack/react-router'
import Dashboard from '../routeComponents/Dashboard'

export const Route = createFileRoute('/')({
  component: Dashboard,
})
