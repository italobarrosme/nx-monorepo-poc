import { Fragment, useRef, useState } from 'react'
import { HamburgerButton } from '../hamburgerButton'
import { ItemsMenu, MenuItem } from './itemsMenu'
import { useOnClickOutside } from 'usehooks-ts'

export type MenuProps = {
  items: MenuItem[]
}

export const Menu = ({ items }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleClickOutside = () => {
    setIsOpen(false)
    console.log('click outside')
  }

  useOnClickOutside(ref, handleClickOutside)

  return (
    <div ref={ref}>
      <HamburgerButton isOpen={isOpen} onClick={() => handleClick()} />
      <ItemsMenu items={items} isOpen={isOpen} />
    </div>
  )
}
