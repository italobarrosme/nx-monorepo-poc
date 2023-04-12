import { Icon } from '@iconify/react'
import { DateTime } from '../dateTime'
import { HamburgerButton } from '../hamburgerButton'
import { Menu, MenuItem } from '../menu/'

type HeaderActions = {
  action: () => void
  icon: string
  label: string
}

type DataUser = {
  name: string
  email: string
}

export type HeaderProps = {
  menu: MenuItem[]
  dataUser: DataUser
  headerActions: HeaderActions[]
}

export const Header = ({ menu, dataUser, headerActions }: HeaderProps) => {
  return (
    <header className="bg-primary-200">
      <div>
        <img src={'/assets/ui/vibra_grafismo_horizontal.png'} />
      </div>
      <nav className="flex h-32 justify-between gap-4 p-2">
        <div>
          <Menu items={menu} />
        </div>
        <div className="flex flex-col justify-center">
          <img src={'/assets/ui/vibra_logo.png'} />
        </div>
        <div className="hidden flex-col justify-center lg:flex">
          <h1 className="text-2xl font-bold text-white">
            Canal de Negócios - Postos Petrobras
          </h1>
        </div>
        <div className="flex flex-col items-end justify-evenly text-white">
          {/* actions */}
          <div>
            {headerActions.map((item) => (
              <button
                key={item.label}
                className="text-white"
                onClick={item.action}
              >
                <Icon icon={item.icon} width={24} />
              </button>
            ))}
          </div>
          <p className="font-bold">{dataUser.name}</p>
          <p>{dataUser.email}</p>
          <div>
            <DateTime />
          </div>
        </div>
      </nav>
    </header>
  )
}
