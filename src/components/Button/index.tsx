import { ReactElement, ButtonHTMLAttributes } from 'react'

export type IBtDefaultProps = {
  title?: string
  outlined?: boolean
  icon?: ReactElement;
  onlyIcon?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  title,
  outlined = true,
  icon,
  onlyIcon = false,
  ...props
}: IBtDefaultProps): ReactElement => {
  return (
    <button
      {...props}
      className={`${outlined ? 'bg-transparent' : 'bg-primary'} ${!onlyIcon ? 'border border-white rounded-xl p-2 hover:bg-primary hover:scale-105' : ''} active:scale-95 transition`}
    >
      {title && <p className="text-white">{title}</p>}
      {icon && icon}
    </button>
  )
}

export default Button