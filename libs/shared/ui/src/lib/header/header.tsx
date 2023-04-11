import { DateTime } from '../dateTime'
import { HamburgerButton } from '../hamburgerButton'
import { Menu, MenuItem } from '../menu/'

type DataUser = {
  name: string
  email: string
}

export type HeaderProps = {
  menu: MenuItem[]
  dataUser: DataUser
}

export const Header = ({ menu, dataUser }: HeaderProps) => {
  return (
    <header className="bg-primary-100">
      <div>
        <img src={'/assets/ui/vibra_grafismo_horizontal.png'} />
      </div>
      <nav className="flex h-32 justify-between  p-4">
        <div>
          <Menu items={menu} />
        </div>
        <div className="flex flex-col justify-center">
          <img src={'/assets/ui/vibra_logo.png'} />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-bold text-white">
            Canal de Negócios - Postos Petrobras
          </h1>
        </div>
        <div className="flex flex-col items-end justify-end text-white">
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
