import { ReactElement, ButtonHTMLAttributes } from 'react'

export type IBtDefaultProps = {
  title?: string
  outlined?: boolean
  icon?: ReactElement;
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  title,
  outlined,
  icon,
  ...props
}: IBtDefaultProps): ReactElement => {
  return (
    <button
      {...props}
      className="bg-transparent border border-white rounded-xl p-2 hover:bg-primary hover:scale-105 active:scale-95 transition"
    >
      {title && <p className="text-white">{title}</p>}
      {icon && icon}
    </button>
  )
}

export default Button