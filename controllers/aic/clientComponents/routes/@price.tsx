import { createFileRoute } from '@tanstack/react-router'
import Price from '../routeComponents/Price'

export const Route = createFileRoute('/@price')({
  component: Price,
})