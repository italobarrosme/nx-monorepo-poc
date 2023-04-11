export type HamburgerButtonProps = {
  isOpen: boolean
  onClick: (value: boolean) => void
}

export const HamburgerButton = ({ isOpen, onClick }: HamburgerButtonProps) => {
  const handleClick = () => {
    isOpen = !isOpen

    onClick(isOpen)
  }

  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`

  return (
    <>
      <button
        className="group flex h-12 w-12 flex-col items-center justify-center rounded border-2 border-white"
        onClick={handleClick}
      >
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? 'translate-y-3 rotate-45 opacity-100' : 'opacity-100'
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? '-translate-y-3 -rotate-45 opacity-100' : 'opacity-100'
          }`}
        />
      </button>
    </>
  )
}
