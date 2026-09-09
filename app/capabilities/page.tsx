import { RFQLink } from "@/components/ui/RFQLink";
import type { Metadata } from "next";

import { capabilities } from "@/data/capabilities";
import { equipment } from "@/data/equipment";
import { materials } from "@/data/company";
import { PageHero, CTASection } from "@/components/sections/Shared";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { ArrowLink, SectionHead } from "@/components/ui/Primitives";
export const metadata: Metadata = { title: "CNC Machining Capabilities", description: "Multi-axis milling, CNC turning, mill-turn, Swiss machining, and documented inspection." };
export default function Capabilities() { return <>
  <PageHero index="01" eyebrow="MANUFACTURING CAPABILITIES" title="Complex parts. Controlled processes." copy="A connected machining and inspection platform for prototype, repeat, and production hardware." media="COMPLEX AEROSPACE COMPONENT CLOSE-UP" />
  <section className="cap-grid alt-section">{capabilities.map(c=><article key={c.id}><MediaPlaceholder label={c.media} aspectRatio="4 / 3" index={c.id}/><span>{c.id}</span><h2>{c.title}</h2><p>{c.summary}</p><ArrowLink href={c.slug.startsWith("..")?"/quality":`/capabilities/${c.slug}`}>View capability</ArrowLink></article>)}</section>
  <section className="equipment alt-section"><SectionHead index="02" eyebrow="PLATFORM" title="Machining through verification." />{Object.entries(equipment).map(([g,x],i)=><div className="equipment-row" key={g}><span>0{i+1}</span><h3>{g}</h3><ul>{x.map(y=><li key={y}>{y}</li>)}</ul></div>)}</section>
  <section className="material-summary"><SectionHead index="03" eyebrow="MATERIALS" title="Difficult alloys included." /><p>{materials.join(" / ")}</p><RFQLink className="button button-light">Submit an RFQ ↗</RFQLink></section><CTASection />
</>; }

