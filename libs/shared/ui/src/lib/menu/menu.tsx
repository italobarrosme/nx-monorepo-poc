import { useRef, useState } from 'react'
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
  }

  useOnClickOutside(ref, handleClickOutside)

  return (
    <>
      <HamburgerButton isOpen={isOpen} onClick={() => handleClick()} />
      <ItemsMenu refs={ref} items={items} isOpen={isOpen} />
    </>
  )
}
