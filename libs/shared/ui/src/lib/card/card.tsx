export type CardProps = {
  img?: string
  title?: string
  text?: string
  description?: string
  altImg?: string
}

export const Card = ({ img, title, description, text, altImg }: CardProps) => {
  return (
    <figure className="bg-secondary-400 max-w-sm rounded-md">
      <div className="flex items-center justify-center pt-4">
        <img
          className="rounded-f h-36 w-36 rounded-md"
          src={img}
          alt={altImg}
          width="384"
          height="512"
        />
      </div>
      <div className=" text-primary-200 p-4">
        <blockquote className="p-4">
          <p className="text-lg">{text}</p>
        </blockquote>
        <figcaption className="bg-secondary-300 rounded-md p-4">
          <div>{title}</div>
          <div>{description}</div>
        </figcaption>
      </div>
    </figure>
  )
}
