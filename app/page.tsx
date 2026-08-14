import Link from "next/link";
import { capabilities } from "@/data/capabilities";
import { equipment } from "@/data/equipment";
import { industries } from "@/data/industries";
import { materials } from "@/data/company";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { ArrowLink, Label, SectionHead } from "@/components/ui/Primitives";
import { CTASection } from "@/components/sections/Shared";
import { CertBadges } from "@/components/sections/CertBadges";
import { HeroTypewriter } from "@/components/ui/HeroTypewriter";
import { Reveal } from "@/components/ui/Reveal";

const expediteItems = ["Expedited routing for schedule-critical programs", "Priority machine + inspection capacity", "Direct engineering point of contact", "Rush prototype turnaround"];
const commsItems = ["Same-day quote turnaround on standard RFQs", "Direct line to engineering + planning", "Proactive schedule + status updates", "On-time delivery performance tracking"];

export default function Home() {
  return (
    <>
      <section className="hero" id="top">
        <video
          className="hero-media"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/media/flpherov28.mp4" type="video/mp4" />
        </video>
        <div className="hero-shade" />
        <div className="hero-content">
          <Label>AEROSPACE + DEFENSE MANUFACTURING</Label>
          <HeroTypewriter lines={["Precision.", "Quality.", "Speed."]} />
          <p>Complex, mission-critical components manufactured with responsive execution, material traceability, and uncompromising dimensional control from Riverside, California.</p>
          <div className="button-row">
            <Link className="button button-accent" href="/contact">Request a Quote ↗</Link>
            <Link className="button button-ghost" href="/capabilities">Explore Capabilities</Link>
          </div>
        </div>
        <div className="hero-rail">{["RIVERSIDE, CALIFORNIA","AS9100D","ITAR REGISTERED","PROTOTYPE → PRODUCTION"].map(x => <span key={x}>{x}</span>)}</div>
      </section>

      <Reveal><section className="mission alt-section"><Label>THE OPERATING IDEA / 01</Label><p>Move from drawing to conforming hardware <em>without unnecessary delay.</em></p></section></Reveal>

      <section className="metrics alt-section">
        {[["25+","YEARS OF EXPERIENCE"],["±0.0001 IN","ACHIEVABLE WHERE GEOMETRY, MATERIAL + PROCESS ALLOW"],["3 / 4 / 5","AXIS MACHINING"],["P → P","PROTOTYPE THROUGH PRODUCTION"],["AS9100D","ITAR REGISTERED"]].map(([v,l], i) => <Reveal key={l} delay={i * 80}><div><strong>{v}</strong><span>{l}</span></div></Reveal>)}
      </section>

      <section className="capabilities alt-section">
        <Reveal><SectionHead index="02" eyebrow="CAPABILITIES" title="Built for complex work." copy="A manufacturing platform for difficult geometry, hard materials, and documentation-driven programs." /></Reveal>
        {capabilities.map((cap, i) => (
          <Reveal key={cap.id}>
            <article className={`cap-panel ${i % 2 ? "reverse" : ""}`}>
              <MediaPlaceholder label={cap.media} mediaType={cap.media.includes("VIDEO") ? "video" : "photo"} index={cap.id} />
              <div><Label>{cap.id}</Label><h3>{cap.title}</h3><p>{cap.summary}</p><ul>{cap.bullets.map(b => <li key={b}>{b}</li>)}</ul><ArrowLink href={cap.slug.startsWith("..") ? "/quality" : `/capabilities/${cap.slug}`}>Explore {cap.title}</ArrowLink></div>
            </article>
          </Reveal>
        ))}
      </section>

      <div className="material-rail" aria-label="Materials"><div>{[...materials, ...materials].map((m,i) => <span key={`${m}-${i}`}>{m} <b>/</b></span>)}</div></div>

      <section className="industries-home">
        <Reveal><SectionHead index="03" eyebrow="MARKETS" title="Hardware for high-consequence environments." /></Reveal>
        <div className="industry-stack">{industries.map((x, i) => <Reveal key={x.title} delay={i * 60}><Link href="/industries"><small>{x.index}</small><h3>{x.title}</h3><p>{x.text}</p><span>↗</span></Link></Reveal>)}</div>
      </section>

      <Reveal><section className="quality-feature alt-section">
        <MediaPlaceholder label="ZEISS CMM / QUALITY LAB PHOTO" index="QLT—01" />
        <div><Label>04 / QUALITY SYSTEM</Label><h2>Evidence at every stage.</h2><p>Quality planning begins with contract and drawing review, continues through in-process verification, and closes with documented final inspection.</p><ul>{["AS9100D quality management","ITAR registration","First Article Inspection / AS9102 support","Material + process traceability","Zeiss + Keyence inspection systems"].map(x => <li key={x}>{x}</li>)}</ul><ArrowLink href="/quality">Explore Quality</ArrowLink></div>
      </section></Reveal>

      <section className="equipment alt-section">
        <Reveal><SectionHead index="05" eyebrow="EQUIPMENT INDEX" title="The right process. The right platform." /></Reveal>
        {Object.entries(equipment).map(([group, items], i) => <Reveal key={group} delay={i * 70}><div className="equipment-row"><span>0{i+1}</span><h3>{group}</h3><ul>{items.map(x => <li key={x}>{x}</li>)}</ul></div></Reveal>)}
      </section>

      <section className="expedite-comms two-columns alt-section">
        <Reveal>
          <div>
            <SectionHead index="06" eyebrow="EXPEDITE" title="Built to compress schedule." copy="Dedicated capacity and direct engineering access support rush prototypes and schedule-critical production releases." />
            <ul className="tag-list">{expediteItems.map(x => <li key={x}>{x}</li>)}</ul>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div>
            <SectionHead index="07" eyebrow="COMMUNICATION" title="Fast answers. On-time delivery." copy="Quoting, engineering questions, and schedule updates move directly between our team and yours." />
            <ul className="tag-list">{commsItems.map(x => <li key={x}>{x}</li>)}</ul>
          </div>
        </Reveal>
      </section>

      <section className="process">
        <Reveal><SectionHead index="08" eyebrow="WORKFLOW" title="Clear handoffs. Controlled execution." /></Reveal>
        <div className="process-grid">{["Submit RFQ","Engineering Review","Production Planning","Machining + Inspection","Documentation + Delivery"].map((x,i) => <Reveal key={x} delay={i * 60}><div><span>0{i+1}</span><h3>{x}</h3></div></Reveal>)}</div>
      </section>

      <section className="certifications">
        <Reveal><SectionHead index="09" eyebrow="CERTIFICATIONS" title="Compliance, verified." copy="Quality and export-control credentials that gate every program before hardware moves." /></Reveal>
        <Reveal delay={100}><CertBadges /></Reveal>
      </section>

      <CTASection />
    </>
  );
}