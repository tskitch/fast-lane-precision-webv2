"use client";

import { RFQLink } from "@/components/ui/RFQLink";

import { useEffect, useState } from "react";

export function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`sticky-cta ${show ? "is-visible" : ""}`} aria-hidden={!show}>
      <span className="sticky-cta-text">Have a drawing ready?</span>
      <RFQLink className="button button-accent" tabIndex={show ? 0 : -1}>Request a Quote ↗</RFQLink>
    </div>
  );
}
