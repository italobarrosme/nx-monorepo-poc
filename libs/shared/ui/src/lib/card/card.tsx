export type CardProps = {
  img?: string
  title?: string
  text?: string
  description?: string
}

export const Card = ({ img, title, description, text }: CardProps) => {
  return (
    <figure className="bg-secondary-400 rounded-md max-w-sm">
      <div className="flex justify-center items-center pt-4">
        <img
          className="w-36 h-36 rounded-f rounded-md"
          src={img}
          alt=""
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
