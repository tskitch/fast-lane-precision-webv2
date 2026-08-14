import Link from "next/link";

export function Label({ children }: { children: React.ReactNode }) {
  return <span className="technical-label">{children}</span>;
}

export function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="arrow-link">{children}<span aria-hidden="true">↗</span></Link>;
}

export function SectionHead({ index, eyebrow, title, copy }: { index: string; eyebrow: string; title: string; copy?: string }) {
  return (
    <header className="section-head">
      <div><Label>{index} / {eyebrow}</Label></div>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </header>
  );
}

