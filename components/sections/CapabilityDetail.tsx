import Link from "next/link";
import { PageHero, CTASection } from "./Shared";
import { SectionHead } from "@/components/ui/Primitives";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";

type Props = {
  index: string; title: string; eyebrow: string; summary: string; media: string;
  processes: { title: string; text: string }[]; equipment: readonly string[];
  applications: string[]; materials: string[]; quality: string;
  previous: [string,string]; next: [string,string];
};

export function CapabilityDetail(p: Props) {
  return <>
    <PageHero index={p.index} eyebrow={p.eyebrow} title={p.title} copy={p.summary} media={p.media} />
    <section className="detail-section alt-section"><SectionHead index="01" eyebrow="PROCESS" title="Purposeful process selection." />
      <div className="detail-cards">{p.processes.map((x,i)=><article key={x.title}><span>0{i+1}</span><h3>{x.title}</h3><p>{x.text}</p></article>)}</div>
    </section>
    <section className="split-dark"><div><SectionHead index="02" eyebrow="EQUIPMENT" title="Platforms assigned around the part." /><ul className="big-list">{p.equipment.map(x=><li key={x}>{x}</li>)}</ul></div><MediaPlaceholder label={p.media} index={`EQP—${p.index}`} /></section>
    <section className="two-columns alt-section"><div><SectionHead index="03" eyebrow="APPLICATIONS" title="Representative work." /><ul className="tag-list">{p.applications.map(x=><li key={x}>{x}</li>)}</ul></div><div><SectionHead index="04" eyebrow="MATERIALS" title="Production-ready materials." /><ul className="tag-list">{p.materials.map(x=><li key={x}>{x}</li>)}</ul></div></section>
    <section className="quality-note alt-section"><SectionHead index="05" eyebrow="QUALITY CONSIDERATIONS" title="Dimensional intent stays visible." copy={p.quality} /></section>
    <nav className="adjacent" aria-label="Adjacent capabilities"><Link href={p.previous[1]}>← {p.previous[0]}</Link><Link href={p.next[1]}>{p.next[0]} →</Link></nav>
    <CTASection />
  </>;
}

