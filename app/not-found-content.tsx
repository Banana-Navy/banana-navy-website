import Link from "next/link";

export default function NotFoundContent() {
  return (
    <main className="not-found">
      <Link href="/fr" className="wordmark" aria-label="Banana Navy home">BANANA <i>NAVY</i></Link>
      <p className="eyebrow">404 · SIGNAL LOST</p>
      <h1>Page introuvable.<br/><em>Pagina niet gevonden.</em><br/>Page not found.</h1>
      <p>Le signal s&apos;est interrompu, mais la navigation reste sous contrôle.</p>
      <Link href="/fr" className="button blue">Retour à l&apos;accueil ↗</Link>
    </main>
  );
}
