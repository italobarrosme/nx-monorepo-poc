import { useState, MouseEvent } from 'react'
import { MenuItem } from './itemsMenu'
import { Icon } from '@iconify/react'
import clsx from 'clsx'

type ItemsSubMenuProps = {
  itemsSubMenu: MenuItem[]
  isOpenSub: boolean
}

export const ItemsSubMenu = ({
  itemsSubMenu,
  isOpenSub
}: ItemsSubMenuProps) => {
  const [isOpenSubRecursive, setIsOpenSubRecursive] = useState(false)

  const handleClick = (ev: MouseEvent) => {
    ev.stopPropagation()
    setIsOpenSubRecursive(!isOpenSubRecursive)
  }

  return (
    <>
      {isOpenSub ? (
        <ul className="absolute left-full top-0">
          {itemsSubMenu?.map((item) =>
            item.subMenu ? (
              <li
                onClick={(ev) => handleClick(ev)}
                key={item.name}
                className={clsx(
                  'bg-primary-400 hover:bg-secondary-200  relative w-[320px] cursor-pointer p-2 text-white',
                  { 'bg-secondary-200': isOpenSubRecursive }
                )}
              >
                <span className="flex items-center justify-between gap-4">
                  {item.name}
                  {isOpenSubRecursive ? (
                    <Icon icon={'material-symbols:arrow-left'} width={24} />
                  ) : (
                    <Icon icon={'material-symbols:arrow-right'} width={24} />
                  )}
                </span>
                <ItemsSubMenu
                  isOpenSub={isOpenSubRecursive}
                  itemsSubMenu={item.subMenu}
                />
              </li>
            ) : (
              <li
                key={item.name}
                className="bg-primary-200 hover:bg-secondary-200  relative w-[320px] cursor-pointer p-2 text-white"
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
