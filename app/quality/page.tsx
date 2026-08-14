import type { Metadata } from "next";
import { equipment } from "@/data/equipment";
import { PageHero, CTASection } from "@/components/sections/Shared";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { SectionHead } from "@/components/ui/Primitives";
import { Tabs } from "@/components/ui/Tabs";
export const metadata: Metadata = { title: "Quality & Inspection", description: "AS9100D quality systems, CMM inspection, FAI support, and material traceability." };

const inspectionItems = [
  { title: "Contract + drawing review", text: "Drawing, revision, specification, and documentation requirements are reviewed before release." },
  { title: "In-process verification", text: "Features are checked against the drawing at defined stages of the machining route." },
  { title: "First Article Inspection", text: "AS9102-format FAI support ties measured results directly to the drawing balloon." },
  { title: "Final inspection", text: "Completed parts are verified against the full drawing and quality clause requirements." },
  { title: "Outside process control", text: "Special processes are coordinated through qualified or NADCAP-approved sources where required." },
  { title: "Nonconformance + corrective action", text: "Deviations are documented, dispositioned, and closed with root-cause corrective action." },
];

const traceabilityItems = [
  { title: "Material certification", text: "Raw material certs are captured and matched to the lot used on each job." },
  { title: "Lot traceability", text: "Material and process history stays connected to the part through production." },
  { title: "Record retention + customer documentation", text: "Defined records keep part, material, process, and inspection history connected and retrievable." },
  { title: "Certificate of Conformance", text: "C of C documentation ships with parts to close the loop for the customer's own quality system." },
];

export default function Quality(){return <>
  <PageHero index="02" eyebrow="QUALITY + INSPECTION" title="Quality Is Built Into the Process." copy="Requirements flow from contract review into planning, machining, inspection, documentation, and delivery." media="QUALITY LAB / ZEISS CMM PHOTO" />
  <section className="quality-system alt-section">
    <SectionHead index="01" eyebrow="SYSTEM" title="From requirement to objective evidence." copy="Fast Lane Precision operates an AS9100D quality system and supports ITAR-controlled work. Current certification status and scope must be confirmed against approved records before launch."/>
    <Tabs
      label="Quality system detail"
      tabs={[
        { id: "inspection", label: "Inspection & Quality", content: <div className="system-grid">{inspectionItems.map((x,i)=><article key={x.title}><span>{String(i+1).padStart(2,"0")}</span><h3>{x.title}</h3><p>{x.text}</p></article>)}</div> },
        { id: "traceability", label: "Traceability", content: <div className="system-grid">{traceabilityItems.map((x,i)=><article key={x.title}><span>{String(i+1).padStart(2,"0")}</span><h3>{x.title}</h3><p>{x.text}</p></article>)}</div> },
      ]}
    />
  </section>
  <section className="split-dark"><MediaPlaceholder label="ZEISS CMM / QUALITY LAB PHOTO" index="QLT—02"/><div><SectionHead index="02" eyebrow="INSPECTION EQUIPMENT" title="Measurement matched to the feature."/><ul className="big-list">{equipment.Inspection.map(x=><li key={x}>{x}</li>)}<li>Digital inspection + reporting tools</li></ul></div></section>
  <section className="document-section alt-section"><SectionHead index="03" eyebrow="DOCUMENT CONTROL" title="Certificates and quality clauses."/><div className="document-grid">{["AS9100D CERTIFICATE","ITAR REGISTRATION STATEMENT","QUALITY CLAUSES"].map(x=><button key={x} disabled><span>[DOWNLOAD {x} — PDF]</span><small>ADD APPROVED DOCUMENT BEFORE ENABLING</small></button>)}</div></section>
  <section className="quality-note alt-section"><SectionHead index="04" eyebrow="DIMENSIONAL CONTROL" title="Capability is application-specific." copy="Fast Lane Precision may hold features to approximately ±0.0001 in / ±0.0025 mm where geometry, material, measurement method, and process allow. Every requirement is reviewed for manufacturability; this is not a blanket tolerance guarantee."/></section><CTASection />
</>;}

