import type { LucideIcon } from 'lucide-react'

interface BadgeProps {
  icon: LucideIcon
  label: string
}

export default function Badge({ icon: Icon, label }: BadgeProps) {
  return (
    <li className="flex items-center gap-2">
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
        <Icon size={20} className="text-primary" />
      </span>
      <span className="text-sm text-white">{label}</span>
    </li>
  )
}
