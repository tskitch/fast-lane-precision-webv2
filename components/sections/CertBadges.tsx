import { FileCheck, Lock, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "AS9100D",
    text: "Aerospace quality management system governing planning, production, and inspection records.",
  },
  {
    icon: FileCheck,
    title: "ISO 9001",
    text: "Foundational quality management standard underlying the AS9100D system.",
  },
  {
    icon: Lock,
    title: "ITAR Registered",
    text: "Registered to manufacture defense articles under the International Traffic in Arms Regulations.",
  },
];

export function CertBadges() {
  return (
    <div className="cert-badges">
      {items.map(({ icon: Icon, title, text }) => (
        <article key={title} className="cert-badge">
          <Icon aria-hidden="true" size={26} strokeWidth={1.5} />
          <h3>{title}</h3>
          <p>{text}</p>
        </article>
      ))}
    </div>
  );
}
