import { Card } from '@nx-monorepo-poc/shared/ui'
import { getComments, ResponseComments } from '../services/comments'
import { useEffect, useState } from 'react'

export function Index() {
  const [comments, setComments] = useState<ResponseComments>(null)

  useEffect(() => {
    getComments().then((comments) => setComments(comments))
  }, [])

  return (
    <div className="flex flex-col justify-center items-center p-4">
      <h1 className="font-bold text-lg">NEXT 2</h1>

      <div className="flex flex-col gap-4 h-auto">
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

export default Index
