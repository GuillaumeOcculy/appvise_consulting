import Link from 'next/link'

const variants = {
  primary: 'bg-primary text-white hover:shadow-lg',
  secondary: 'border border-border text-dark hover:shadow-lg',
  ghost: 'text-primary hover:underline',
  inverse: 'bg-white text-primary hover:shadow-lg',
} as const

const sizes = {
  default: 'py-3.5 px-8 text-base',
  sm: 'py-2.5 px-6 text-sm',
} as const

interface ButtonProps {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  href?: string
  target?: string
  rel?: string
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit'
  onClick?: () => void
}

export default function Button({
  variant = 'primary',
  size = 'default',
  href,
  target,
  rel,
  children,
  className = '',
  type = 'button',
  onClick,
}: ButtonProps) {
  const autoRel = target === '_blank' && !rel ? 'noopener noreferrer' : rel

  const baseClasses = `inline-flex items-center justify-center rounded-lg font-body font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-2 focus:outline-primary focus:outline-offset-2 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('//')

    if (isExternal) {
      return (
        <a href={href} target={target} rel={autoRel} className={baseClasses}>
          {children}
        </a>
      )
    }

    return (
      <Link href={href} target={target} rel={autoRel} className={baseClasses}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {children}
    </button>
  )
}
