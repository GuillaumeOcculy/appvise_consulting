import { createMetadata } from '@/lib/metadata'
import { CONTACT_EMAIL } from '@/lib/constants'

export const metadata = createMetadata({
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité et protection des données personnelles — Appvise Consulting.',
  path: '/confidentialite',
})

export default function ConfidentialitePage() {
  const email = CONTACT_EMAIL || 'guillaume@appvise-consulting.com'

  return (
    <div className="bg-light text-dark py-16 lg:py-24">
      <div className="max-w-prose mx-auto px-4">
        <a href="/" className="text-primary hover:underline text-sm">
          &larr; Retour à l&apos;accueil
        </a>

        <h1 className="font-heading font-bold text-3xl md:text-4xl mt-8">Politique de confidentialité</h1>

        <div className="prose prose-lg mt-8">
          <p><em>Dernière mise à jour : mars 2026</em></p>

          <h2>Responsable du traitement</h2>
          <p>
            Le responsable du traitement des données personnelles est Guillaume Occuly,
            exerçant sous le nom commercial Appvise Consulting.
          </p>
          <p>Contact : <a href={`mailto:${email}`}>{email}</a></p>

          <h2>Données collectées</h2>
          <p>
            Dans le cadre de son activité, Appvise Consulting peut être amené à collecter
            les données suivantes :
          </p>
          <ul>
            <li><strong>Via le formulaire de contact / quiz (Tally) :</strong> nom, prénom, adresse email,
              nom de l&apos;entreprise, description du besoin</li>
            <li><strong>Via la prise de rendez-vous (Zcal) :</strong> nom, prénom, adresse email</li>
            <li><strong>Via les outils d&apos;analyse (Vercel Analytics) :</strong> données de navigation
              anonymisées (pages visitées, durée de visite, type d&apos;appareil). Aucun cookie
              de suivi n&apos;est utilisé.</li>
          </ul>

          <h2>Finalités du traitement</h2>
          <p>Les données collectées sont utilisées pour :</p>
          <ul>
            <li>Répondre à vos demandes de contact et de devis</li>
            <li>Planifier et organiser les appels de diagnostic</li>
            <li>Améliorer l&apos;expérience utilisateur du site</li>
          </ul>

          <h2>Base légale</h2>
          <p>
            Le traitement des données repose sur votre <strong>consentement</strong> (soumission
            volontaire du formulaire) et sur l&apos;<strong>intérêt légitime</strong> d&apos;Appvise Consulting
            à répondre aux demandes de prospects.
          </p>

          <h2>Durée de conservation</h2>
          <p>
            Les données personnelles sont conservées pendant une durée maximale de
            <strong> 3 ans</strong> à compter du dernier contact, conformément aux recommandations
            de la CNIL. Elles sont ensuite supprimées ou anonymisées.
          </p>

          <h2>Destinataires des données</h2>
          <p>Vos données peuvent être transmises aux sous-traitants suivants :</p>
          <ul>
            <li><strong>Tally</strong> — gestion des formulaires (hébergé en Europe)</li>
            <li><strong>Zcal</strong> — gestion des rendez-vous</li>
            <li><strong>Vercel</strong> — hébergement du site</li>
            <li><strong>Airtable</strong> — CRM et suivi des prospects</li>
          </ul>
          <p>
            Aucune donnée n&apos;est vendue ou cédée à des tiers à des fins commerciales.
          </p>

          <h2>Vos droits</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD),
            vous disposez des droits suivants :
          </p>
          <ul>
            <li><strong>Droit d&apos;accès :</strong> obtenir la confirmation que vos données sont traitées
              et en recevoir une copie</li>
            <li><strong>Droit de rectification :</strong> corriger des données inexactes ou incomplètes</li>
            <li><strong>Droit à l&apos;effacement :</strong> demander la suppression de vos données</li>
            <li><strong>Droit à la limitation :</strong> restreindre le traitement de vos données</li>
            <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
            <li><strong>Droit d&apos;opposition :</strong> vous opposer au traitement de vos données</li>
          </ul>
          <p>
            Pour exercer ces droits, contactez-nous à : <a href={`mailto:${email}`}>{email}</a>
          </p>
          <p>
            En cas de litige, vous pouvez introduire une réclamation auprès de
            la <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">CNIL</a>.
          </p>

          <h2>Cookies</h2>
          <p>
            Ce site utilise <strong>Vercel Analytics</strong>, un outil d&apos;analyse respectueux
            de la vie privée qui ne dépose <strong>aucun cookie</strong> et ne collecte aucune
            donnée personnelle identifiable. Aucun bandeau de cookies n&apos;est donc nécessaire.
          </p>

          <h2>Modifications</h2>
          <p>
            Cette politique de confidentialité peut être mise à jour à tout moment.
            La date de dernière mise à jour est indiquée en haut de cette page.
          </p>
        </div>
      </div>
    </div>
  )
}
