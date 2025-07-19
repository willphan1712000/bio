import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/@price')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/@price"!</div>
}
