import Link from "next/link";
import { capabilities } from "@/data/capabilities";
import { equipment } from "@/data/equipment";
import { industries } from "@/data/industries";
import { materials } from "@/data/company";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { ArrowLink, Label, SectionHead } from "@/components/ui/Primitives";
import { CTASection } from "@/components/sections/Shared";
import { HeroTypewriter } from "@/components/ui/HeroTypewriter";

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
        <div className="hero-content"><Label>AEROSPACE + DEFENSE MANUFACTURING</Label><HeroTypewriter lines={["Precision.", "Quality. Speed."]} typingSpeed={70} lineDelay={220} /><p>Complex, mission-critical components manufactured with responsive execution, material traceability, and uncompromising dimensional control.</p><div className="button-row"><Link className="button button-light" href="/contact">Request a Quote ↗</Link><Link className="button button-ghost" href="/capabilities">Explore Capabilities</Link></div></div>
        <div className="hero-rail">{["RIVERSIDE, CALIFORNIA","AS9100D","ITAR REGISTERED","PROTOTYPE → PRODUCTION"].map(x => <span key={x}>{x}</span>)}</div>
      </section>

      <section className="mission light-section"><Label>THE OPERATING IDEA / 01</Label><p>Move from drawing to conforming hardware <em>without unnecessary delay.</em></p></section>

      <section className="metrics light-section">
        {[["25+","YEARS OF EXPERIENCE"],["±0.0001 IN","ACHIEVABLE WHERE GEOMETRY, MATERIAL + PROCESS ALLOW"],["3 / 4 / 5","AXIS MACHINING"],["P → P","PROTOTYPE THROUGH PRODUCTION"],["AS9100D","ITAR REGISTERED"]].map(([v,l]) => <div key={l}><strong>{v}</strong><span>{l}</span></div>)}
      </section>

      <section className="capabilities light-section">
        <SectionHead index="02" eyebrow="CAPABILITIES" title="Built for complex work." copy="A manufacturing platform for difficult geometry, hard materials, and documentation-driven programs." />
        {capabilities.map((cap, i) => (
          <article className={`cap-panel ${i % 2 ? "reverse" : ""}`} key={cap.id}>
            <MediaPlaceholder label={cap.media} mediaType={cap.media.includes("VIDEO") ? "video" : "photo"} index={cap.id} />
            <div><Label>{cap.id}</Label><h3>{cap.title}</h3><p>{cap.summary}</p><ul>{cap.bullets.map(b => <li key={b}>{b}</li>)}</ul><ArrowLink href={cap.slug.startsWith("..") ? "/quality" : `/capabilities/${cap.slug}`}>Explore {cap.title}</ArrowLink></div>
          </article>
        ))}
      </section>

      <div className="material-rail" aria-label="Materials"><div>{[...materials, ...materials].map((m,i) => <span key={`${m}-${i}`}>{m} <b>/</b></span>)}</div></div>

      <section className="industries-home">
        <SectionHead index="03" eyebrow="MARKETS" title="Hardware for high-consequence environments." />
        <div className="industry-stack">{industries.map(x => <Link href="/industries" key={x.title}><small>{x.index}</small><h3>{x.title}</h3><p>{x.text}</p><span>↗</span></Link>)}</div>
      </section>

      <section className="quality-feature light-section">
        <MediaPlaceholder label="ZEISS CMM / QUALITY LAB PHOTO" index="QLT—01" />
        <div><Label>04 / QUALITY SYSTEM</Label><h2>Evidence at every stage.</h2><p>Quality planning begins with contract and drawing review, continues through in-process verification, and closes with documented final inspection.</p><ul>{["AS9100D quality management","ITAR registration","First Article Inspection / AS9102 support","Material + process traceability","Zeiss + Keyence inspection systems"].map(x => <li key={x}>{x}</li>)}</ul><ArrowLink href="/quality">Explore Quality</ArrowLink></div>
      </section>

      <section className="equipment light-section">
        <SectionHead index="05" eyebrow="EQUIPMENT INDEX" title="The right process. The right platform." />
        {Object.entries(equipment).map(([group, items], i) => <div className="equipment-row" key={group}><span>0{i+1}</span><h3>{group}</h3><ul>{items.map(x => <li key={x}>{x}</li>)}</ul></div>)}
      </section>

      <section className="process">
        <SectionHead index="06" eyebrow="WORKFLOW" title="Clear handoffs. Controlled execution." />
        <div className="process-grid">{["Submit RFQ","Engineering Review","Production Planning","Machining + Inspection","Documentation + Delivery"].map((x,i) => <div key={x}><span>0{i+1}</span><h3>{x}</h3></div>)}</div>
      </section>

      <section className="logo-band light-section">
        <Label>SELECTED PROGRAM EXPERIENCE / PLACEHOLDERS ONLY</Label>
        {/* Verify all customer names and logo permissions before publication. These placeholders do not imply a current relationship or endorsement. */}
        <div>{["BOEING","SPACEX","LOCKHEED MARTIN","RELATIVITY SPACE","CASTELION","AST SPACEMOBILE"].map(x => <MediaPlaceholder key={x} label={`CUSTOMER LOGO — ${x}`} mediaType="logo" aspectRatio="5 / 2" />)}</div>
        <p>Company names are layout placeholders only. Approval and relationship status must be verified before publication.</p>
      </section>
      <CTASection />
    </>
  );
}
