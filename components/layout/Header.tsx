"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const links = [
  ["Quality", "/quality"], ["Industries", "/industries"], ["About", "/about"], ["Contact", "/contact"],
];
const capabilityLinks = [
  ["Overview", "/capabilities"], ["CNC Milling", "/capabilities/milling"], ["CNC Turning", "/capabilities/turning"],
  ["Swiss Machining", "/capabilities/swiss"], ["Quality & Inspection", "/quality"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const key = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", key);
    return () => { document.body.style.overflow = previous; document.removeEventListener("keydown", key); };
  }, [open]);
  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <Link href="/" className="brand" aria-label="Fast Lane Precision home"><Image src="/media/flp-logo.svg" alt="" width={38} height={38} priority /> FAST LANE <b>PRECISION</b></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <div className="nav-dropdown">
          <Link href="/capabilities">Capabilities <ChevronDown size={13} /></Link>
          <div className="mega-menu">
            <span className="technical-label">MANUFACTURING / 01—05</span>
            {capabilityLinks.map(([name, href], i) => <Link key={href} href={href}><small>0{i + 1}</small>{name}<span>↗</span></Link>)}
          </div>
        </div>
        {links.map(([name, href]) => <Link key={href} href={href}>{name}</Link>)}
        <Link href="/contact" className="nav-cta">Request a Quote</Link>
      </nav>
      <button className="menu-button" onClick={() => setOpen(true)} aria-expanded={open} aria-controls="mobile-menu" aria-label="Open menu"><Menu /></button>
      {open && (
        <div id="mobile-menu" className="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <div className="mobile-top"><span className="brand"><Image src="/media/flp-logo.svg" alt="" width={38} height={38} /> FAST LANE</span><button ref={closeRef} onClick={() => setOpen(false)} aria-label="Close menu"><X /></button></div>
          <nav>
            {[["Capabilities", "/capabilities"], ...capabilityLinks.slice(1), ...links].map(([name, href], i) =>
              <Link key={`${href}-${i}`} href={href} onClick={() => setOpen(false)}><small>0{(i + 1).toString().padStart(2, "0")}</small>{name}<span>↗</span></Link>
            )}
          </nav>
          <Link href="/contact" className="button button-light" onClick={() => setOpen(false)}>Request a Quote</Link>
        </div>
      )}
    </header>
  );
}
