import type { Metadata } from "next";
import { equipment } from "@/data/equipment";
import { PageHero, CTASection } from "@/components/sections/Shared";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { SectionHead } from "@/components/ui/Primitives";
export const metadata: Metadata = { title: "Quality & Inspection", description: "AS9100D quality systems, CMM inspection, FAI support, and material traceability." };
const system=["Contract + drawing review","Material certification","Lot traceability","First Article Inspection","In-process verification","Final inspection","Outside process control","Nonconformance + corrective action","Record retention + customer documentation"];
export default function Quality(){return <>
  <PageHero index="02" eyebrow="QUALITY + INSPECTION" title="Quality Is Built Into the Process." copy="Requirements flow from contract review into planning, machining, inspection, documentation, and delivery." media="QUALITY LAB / ZEISS CMM PHOTO" />
  <section className="quality-system light-section"><SectionHead index="01" eyebrow="SYSTEM" title="From requirement to objective evidence." copy="Fast Lane Precision operates an AS9100D quality system and supports ITAR-controlled work. Current certification status and scope must be confirmed against approved records before launch."/><div className="system-grid">{system.map((x,i)=><article key={x}><span>{String(i+1).padStart(2,"0")}</span><h3>{x}</h3><p>{i===0?"Drawing, revision, specification, and documentation requirements are reviewed before release.":i===6?"Special processes are coordinated through qualified or NADCAP-approved sources where required.":"Defined records keep part, material, process, and inspection history connected."}</p></article>)}</div></section>
  <section className="split-dark"><MediaPlaceholder label="ZEISS CMM / QUALITY LAB PHOTO" index="QLT—02"/><div><SectionHead index="02" eyebrow="INSPECTION EQUIPMENT" title="Measurement matched to the feature."/><ul className="big-list">{equipment.Inspection.map(x=><li key={x}>{x}</li>)}<li>Digital inspection + reporting tools</li></ul></div></section>
  <section className="document-section light-section"><SectionHead index="03" eyebrow="DOCUMENT CONTROL" title="Certificates and quality clauses."/><div className="document-grid">{["AS9100D CERTIFICATE","ITAR REGISTRATION STATEMENT","QUALITY CLAUSES"].map(x=><button key={x} disabled><span>[DOWNLOAD {x} — PDF]</span><small>ADD APPROVED DOCUMENT BEFORE ENABLING</small></button>)}</div></section>
  <section className="quality-note light-section"><SectionHead index="04" eyebrow="DIMENSIONAL CONTROL" title="Capability is application-specific." copy="Fast Lane Precision may hold features to approximately ±0.0001 in / ±0.0025 mm where geometry, material, measurement method, and process allow. Every requirement is reviewed for manufacturability; this is not a blanket tolerance guarantee."/></section><CTASection />
</>;}

