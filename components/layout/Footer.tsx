import Link from "next/link";
import Image from "next/image";
import { company } from "@/data/company";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-lead"><Image src="/media/flp-logo.svg" alt="Fast Lane Precision" width={44} height={44} /><p>Complex hardware.<br />Controlled execution.</p></div>
      <div className="footer-grid">
        <div><span className="technical-label">LOCATION</span><p>{company.location}</p><p className="muted">{company.address}</p></div>
        <div><span className="technical-label">CAPABILITIES</span><Link href="/capabilities/milling">CNC Milling</Link><Link href="/capabilities/turning">CNC Turning</Link><Link href="/capabilities/swiss">Swiss Machining</Link><Link href="/quality">Quality</Link></div>
        <div><span className="technical-label">COMPANY</span><Link href="/about">About</Link><Link href="/industries">Industries</Link><Link href="/contact">Contact / RFQ</Link><Link href="/privacy">Privacy</Link></div>
        <div><span className="technical-label">STATUS</span><p>AS9100D</p><p>ITAR REGISTERED</p></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} FAST LANE PRECISION</span><span>RIVERSIDE / CALIFORNIA / USA</span><a href="#top">BACK TO TOP ↑</a></div>
    </footer>
  );
}

