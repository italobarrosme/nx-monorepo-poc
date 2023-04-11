import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useEffect, useState } from 'react'

export const DateTime = () => {
  const [dateTime, setDateTime] = useState<Date>()
  useEffect(() => {
    const time = setInterval(() => {
      setDateTime(new Date())
    }, 1000)

    return () => clearInterval(time)
  }, [])

  return dateTime ? (
    <div className="flex">
      <pre className="flex justify-between font-sans text-sm capitalize tracking-tighter">
        <span>
          {format(dateTime, "EEEE, dd 'de' MMMM 'de' yyyy ", {
            locale: ptBR
          })}
        </span>
        <span className="w-14 text-end">
          {format(dateTime, 'HH:mm:ss', {
            locale: ptBR
          })}
        </span>
      </pre>
    </div>
  ) : (
    <> loading ... </>
  )
}
