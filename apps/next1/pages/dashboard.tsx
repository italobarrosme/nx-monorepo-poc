import { Header } from '@nx-monorepo-poc/shared/ui'
import { useSession, signOut } from 'next-auth/react'
import { logout } from '../services/auth'
import { useRouter } from 'next/router'

const Dashboard = () => {
  const { data: session } = useSession()
  const router = useRouter()

  const dataSession = session?.user

  const menu = [
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
  ]

  const headerActions = [
    {
      action: async () => {
        await signOut({ redirect: false })
        logout().then(({ path }) => {
          router.push('/example')
        })
      },
      label: 'Logout',
      icon: 'mdi:logout'
    }
  ]

  return (
    <div>
      <Header
        menu={menu}
        headerActions={headerActions}
        dataUser={{
          name: dataSession?.name,
          email: 'test@here'
        }}
      ></Header>
    </div>
  )
}

export default Dashboard
