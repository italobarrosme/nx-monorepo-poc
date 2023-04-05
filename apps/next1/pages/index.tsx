import { Card } from '@nx-monorepo-poc/shared/ui'
import { getUsers, ResponseUser } from './../services/users'
import { useEffect, useState } from 'react'

export function Index() {
  const [users, setUsers] = useState<ResponseUser>(null)

  useEffect(() => {
    getUsers().then((users) => setUsers(users))
  }, [])

  return (
    <div className="flex flex-col justify-center items-center p-4">
      <h1 className="font-bold text-lg">NEXT 1</h1>

      <div className="flex flex-col gap-4 h-auto">
        {users?.map((user) => (
          <Card
            key={user.id}
            img={`https://i.pravatar.cc/150?img=${user.id}`}
            title={user.name}
            description={user.address.city}
            text="“I love working at Acme. It’s a great place to work with great people.” "
          ></Card>
        ))}
      </div>
    </div>
  )
}

export default Index
