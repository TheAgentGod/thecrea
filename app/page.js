import { modules } from '../lib/links';

function Section({ title, children }){
  return (
    <div className="section">
      <h4>{title}</h4>
      <div className="grid">{children}</div>
    </div>
  )
}

function Card({name,desc,slug,tags}){
  return (
    <article className="card">
      <h3>{name}</h3>
      <p>{desc}</p>
      <div className="meta">{tags.map(t => <span key={t}>{t}</span>)}</div>
      <div className="actions">
        <a className="btn primary" href={`/go/${slug}`} rel="noopener">Abrir</a>
        <a className="btn" href={`/go/${slug}`} rel="noopener">Copiar link</a>
      </div>
    </article>
  )
}

export default function Page(){
  const base = modules.slice(0,2);
  const look = modules.slice(2,5);
  const voice = modules.slice(5,8);
  const growth = modules.slice(8,10);
  const legacy = modules.slice(10);

  return (
    <main>
      <section className="hero">
        <h2>Estructura, claridad y criterio aplicados a tu marca.</h2>
        <p>Los botones usan rutas internas /go/ que redirigen de forma segura a los GPTs privados.</p>
      </section>

      <Section title="THE BASE">
        {base.map(m => <Card key={m.slug} {...m} />)}
      </Section>

      <Section title="THE LOOK">
        {look.map(m => <Card key={m.slug} {...m} />)}
      </Section>

      <Section title="THE VOICE">
        {voice.map(m => <Card key={m.slug} {...m} />)}
      </Section>

      <Section title="THE GROWTH">
        {growth.map(m => <Card key={m.slug} {...m} />)}
      </Section>

      <Section title="THE LEGACY">
        {legacy.map(m => <Card key={m.slug} {...m} />)}
      </Section>
    </main>
  )
}
