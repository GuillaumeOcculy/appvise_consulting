import { Check } from 'lucide-react'

interface CheckItemProps {
  children: React.ReactNode
}

export default function CheckItem({ children }: CheckItemProps) {
  return (
    <div className="flex items-start gap-3">
      <Check size={20} className="text-success mt-0.5 shrink-0" />
      <span>{children}</span>
    </div>
  )
}
