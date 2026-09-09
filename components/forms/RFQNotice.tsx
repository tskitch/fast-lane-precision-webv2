import { company } from "@/data/company";

export function RFQNotice() {
  return <div className="rfq-notice">
    <p>Online RFQ submissions are temporarily unavailable. Please send all RFQs directly to <a href={`mailto:${company.email}`}>{company.email}</a>.</p>
    <a className="button button-accent" href={`mailto:${company.email}`}>Email your RFQ ↗</a>
  </div>;
}
