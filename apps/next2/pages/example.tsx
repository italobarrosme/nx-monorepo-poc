import { Card } from '@nx-monorepo-poc/shared/ui'
import { getComments, ResponseComments } from '../services/comments'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export function Example() {
  const [comments, setComments] = useState<ResponseComments>(null)

  const { push } = useRouter()
  useEffect(() => {
    getComments().then((comments) => setComments(comments))
  }, [])

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-lg font-bold">NEXT 2</h1>

      <button
        className="my-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={() => push('/login')}
      >
        Login
      </button>

      <div className="flex h-auto flex-col gap-4">
        {comments?.map((comments) => (
          <Card
            key={comments.id}
            img={`https://i.pravatar.cc/150?img=${comments.id}`}
            title={comments.email}
            description={comments.body}
          ></Card>
        ))}
      </div>
    </div>
  )
}

export default Example
