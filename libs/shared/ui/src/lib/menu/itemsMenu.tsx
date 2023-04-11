import { useState, MouseEvent } from 'react'
import { ItemsSubMenu } from './itemsSubMenu'
import clsx from 'clsx'
import { Icon } from '@iconify/react'

export type MenuItem = {
  name: string
  url: string
  subMenu?: MenuItem[]
}

export type ItemsMenuProps = {
  items: MenuItem[]
  isOpen: boolean
}

export const ItemsMenu = ({ items, isOpen }: ItemsMenuProps) => {
  const [isOpenSub, setIsOpenSub] = useState(false)

  const handleClick = (ev: MouseEvent) => {
    ev.stopPropagation()
    setIsOpenSub(!isOpenSub)
  }

  return (
    <>
      {isOpen ? (
        <ul className="absolute mt-8">
          {items?.map((item) =>
            item.subMenu ? (
              <li
                onClick={(ev) => handleClick(ev)}
                key={item.name}
                className={clsx(
                  'bg-primary-200 hover:bg-secondary-200  relative w-[320px] cursor-pointer p-2 text-white',
                  { 'bg-secondary-200': isOpenSub }
                )}
              >
                <span className="flex items-center justify-between gap-4">
                  {item.name}
                  {isOpenSub ? (
                    <Icon icon={'material-symbols:arrow-left'} width={24} />
                  ) : (
                    <Icon icon={'material-symbols:arrow-right'} width={24} />
                  )}
                </span>
                <ItemsSubMenu
                  isOpenSub={isOpenSub}
                  itemsSubMenu={item.subMenu}
                />
              </li>
            ) : (
              <li
                key={item.name}
                className={clsx(
                  'bg-primary-200 hover:bg-secondary-200  relative w-[320px] cursor-pointer p-2 text-white'
                )}
              >
                <a href={item.url}>{item.name}</a>
              </li>
            )
          )}
        </ul>
      ) : null}
    </>
  )
}
