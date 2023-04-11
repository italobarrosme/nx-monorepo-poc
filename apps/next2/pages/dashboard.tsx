import { Header } from '@nx-monorepo-poc/shared/ui'
import { useSession } from 'next-auth/react'
const Dashboard = () => {
  const { data: session } = useSession()

  const dataSession = session?.user

  return (
    <div>
      <Header
        menu={[
          {
            name: 'Home',
            url: '/dashboard'
          },
          {
            name: 'About',
            url: '/about',
            subMenu: [
              {
                name: 'About 1',
                url: '/about/1'
              },
              {
                name: 'About 2',
                url: '/about/2'
              },
              {
                name: 'About 3',
                url: '/about/3',
                subMenu: [
                  {
                    name: 'Details 1',
                    url: '/details/1'
                  },
                  {
                    name: 'Details 2',
                    url: '/details/2'
                  }
                ]
              }
            ]
          }
        ]}
        dataUser={{
          name: dataSession?.name,
          email: 'test@here'
        }}
      ></Header>
    </div>
  )
}

export default Dashboard
