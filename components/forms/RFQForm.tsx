"use client";
import { useState } from "react";

const fields = [
  ["firstName", "First name", "text"], ["lastName", "Last name", "text"], ["company", "Company", "text"],
  ["email", "Work email", "email"], ["phone", "Phone", "tel"], ["quantity", "Estimated quantity", "text"],
  ["delivery", "Target delivery date", "date"], ["material", "Material", "text"],
];

export function RFQForm() {
  const [message, setMessage] = useState("");
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) return;
    setMessage("Form interface complete. Connect this form to the approved Fast Lane Precision email or CRM endpoint before launch.");
  }
  return (
    <form className="rfq-form" onSubmit={submit}>
      <div className="form-grid">
        {fields.map(([name, label, type]) => <label key={name}>{label}{["firstName","lastName","company","email"].includes(name) && " *"}<input name={name} type={type} required={["firstName","lastName","company","email"].includes(name)} /></label>)}
        <label>Project type<select name="projectType"><option>Prototype</option><option>Production</option><option>Development hardware</option><option>Other</option></select></label>
        <label>Capability needed<select name="capability"><option>CNC milling</option><option>CNC turning / mill-turn</option><option>Swiss machining</option><option>Inspection / documentation</option><option>Unsure</option></select></label>
        <label>ITAR-controlled project<select name="itar"><option>Unsure</option><option>Yes</option><option>No</option></select></label>
      </div>
      <label>Message / project details *<textarea name="details" required rows={7} /></label>
      <div className="upload-disabled" aria-disabled="true"><strong>DRAWING / CAD UPLOAD DISABLED</strong><span>Secure transfer endpoint required before launch.</span></div>
      <p className="security-notice">Do not upload export-controlled, proprietary, or sensitive technical files until Fast Lane Precision provides an approved secure transfer method.</p>
      <button className="button button-dark" type="submit">Review Demo Submission ↗</button>
      {message && <p className="form-status" role="status">{message}</p>}
    </form>
  );
}

