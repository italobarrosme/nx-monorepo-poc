import { useSession } from 'next-auth/react'
const Dashboard = () => {
  const { data: session } = useSession()

  return (
    <div>
      <h1>Dashboard NEXT2</h1>
      <p>Session: {JSON.stringify(session)}</p>
    </div>
  )
}

export default Dashboard
