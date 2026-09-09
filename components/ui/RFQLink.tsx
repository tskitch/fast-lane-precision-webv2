"use client";

import Link from "next/link";
import { useId, useRef, type ReactNode } from "react";
import { RFQ_ENABLED } from "@/data/rfq";
import { RFQNotice } from "@/components/forms/RFQNotice";

export function RFQLink({ children, className, tabIndex }: { children: ReactNode; className?: string; tabIndex?: number }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  if (RFQ_ENABLED) return <Link href="/contact" className={className} tabIndex={tabIndex}>{children}</Link>;
  return <>
    <a href="/contact#rfq-notice" className={className} tabIndex={tabIndex} aria-haspopup="dialog" onClick={event => {
      event.preventDefault();
      dialog.current?.showModal();
    }}>{children}</a>
    <dialog ref={dialog} className="rfq-dialog" aria-labelledby={titleId} onClick={event => {
      if (event.target === event.currentTarget) dialog.current?.close();
    }} onKeyDown={event => event.stopPropagation()}>
      <h2 id={titleId}>Send your RFQ by email</h2>
      <RFQNotice />
      <button type="button" className="button button-ghost" onClick={() => dialog.current?.close()}>Close</button>
    </dialog>
  </>;
}
