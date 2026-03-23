import { createMetadata } from '@/lib/metadata'
import { SITE_URL, CONTACT_EMAIL } from '@/lib/constants'

export const metadata = createMetadata({
  title: 'Mentions légales',
  description: 'Mentions légales du site Appvise Consulting.',
  path: '/mentions-legales',
})

export default function MentionsLegalesPage() {
  const email = CONTACT_EMAIL || 'guillaume@appvise-consulting.com'

  return (
    <div className="bg-light text-dark py-16 lg:py-24">
      <div className="max-w-prose mx-auto px-4">
        <a href="/" className="text-primary hover:underline text-sm">
          &larr; Retour à l&apos;accueil
        </a>

        <h1 className="font-heading font-bold text-3xl md:text-4xl mt-8">Mentions légales</h1>

        <div className="prose prose-lg mt-8">
          <h2>Éditeur du site</h2>
          <p>
            Le site <strong>{SITE_URL}</strong> est édité par :
          </p>
          <ul>
            <li><strong>Nom :</strong> Guillaume Occuly</li>
            <li><strong>Statut :</strong> Entrepreneur individuel</li>
            <li><strong>Activité :</strong> Appvise Consulting — Automatisation et développement sur-mesure</li>
            <li><strong>Adresse :</strong> Paris, France</li>
            <li><strong>Email :</strong> {email}</li>
            <li><strong>SIRET :</strong> 918 882 614 00012</li>
          </ul>

          <h2>Hébergeur</h2>
          <p>
            Le site est hébergé par :
          </p>
          <ul>
            <li><strong>Vercel Inc.</strong></li>
            <li>440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis</li>
            <li>Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a></li>
          </ul>

          <h2>Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu de ce site (textes, images, logos, icônes, mise en page) est la propriété
            exclusive de Guillaume Occuly / Appvise Consulting, sauf mention contraire. Toute reproduction,
            représentation, modification ou distribution, même partielle, est interdite sans autorisation
            écrite préalable.
          </p>

          <h2>Responsabilité</h2>
          <p>
            Les informations fournies sur ce site le sont à titre indicatif. Appvise Consulting s&apos;efforce
            de les maintenir à jour mais ne saurait garantir leur exactitude, complétude ou actualité.
            L&apos;utilisation des informations et contenus disponibles sur ce site se fait sous la pleine
            responsabilité de l&apos;utilisateur.
          </p>

          <h2>Liens externes</h2>
          <p>
            Ce site peut contenir des liens vers des sites tiers. Appvise Consulting n&apos;exerce aucun
            contrôle sur le contenu de ces sites et décline toute responsabilité quant à leur contenu
            ou aux éventuels dommages résultant de leur utilisation.
          </p>

          <h2>Contact</h2>
          <p>
            Pour toute question relative aux mentions légales, vous pouvez nous contacter
            à l&apos;adresse : <a href={`mailto:${email}`}>{email}</a>.
          </p>
        </div>
      </div>
    </div>
  )
}
