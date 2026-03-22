import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="bg-dark text-white min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="font-heading font-bold text-4xl">Page introuvable</h1>
        <p className="text-text-muted text-lg mt-4">
          Cette page n&apos;existe pas ou a été déplacée.
        </p>
        <div className="mt-8">
          <Button variant="primary" href="/">
            Retour à l&apos;accueil
          </Button>
        </div>
      </div>
    </div>
  )
}
