import Link from "next/link";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { Label } from "@/components/ui/Primitives";

export function PageHero({ index, eyebrow, title, copy, media }: { index: string; eyebrow: string; title: string; copy: string; media: string }) {
  return (
    <section className="page-hero">
      <div className="page-hero-copy"><Label>{index} / {eyebrow}</Label><h1>{title}</h1><p>{copy}</p></div>
      <MediaPlaceholder label={media} aspectRatio="16 / 7" index={`FLP—${index}`} />
    </section>
  );
}

export function CTASection() {
  return (
    <section className="final-cta">
      <Label>START A CONVERSATION / RFQ</Label>
      <h2>Bring Us the Part<br />Others Avoid.</h2>
      <p>Difficult geometry. Challenging materials. Urgent schedules. Demanding documentation. Send the drawing and requirements; our team will review the path forward.</p>
      <div className="button-row"><Link href="/contact" className="button button-light">Request a Quote ↗</Link><Link href="/contact" className="button button-ghost">Contact Our Team</Link></div>
    </section>
  );
}

