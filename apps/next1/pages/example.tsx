import { Card } from '@nx-monorepo-poc/shared/ui'
import { getUsers, ResponseUser } from './../services/users'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export function Example() {
  const [users, setUsers] = useState<ResponseUser>(null)
  const { push } = useRouter()

  useEffect(() => {
    getUsers().then((users) => setUsers(users))
  }, [])

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-lg font-bold">NEXT 1</h1>
      <button
        className="my-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={() => push('/login')}
      >
        Login
      </button>
      <div className="flex h-auto flex-col gap-4">
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

export default Example
