import { createFileRoute } from '@tanstack/react-router'
import Upload from '../routeComponents/Upload'

export const Route = createFileRoute('/@upload')({
  component: Upload,
})