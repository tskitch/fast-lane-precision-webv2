import type { Metadata } from "next";
import { CapabilityDetail } from "@/components/sections/CapabilityDetail";
import { equipment } from "@/data/equipment";
export const metadata: Metadata = { title: "CNC Turning & Mill-Turn", description: "CNC turning, live tooling, and mill-turn manufacturing for precision rotational components." };
export default function Page(){return <CapabilityDetail index="01.2" eyebrow="CNC TURNING + MILL-TURN" title="Rotational precision. Fewer handoffs." summary="Turning and live-tool strategies built around concentricity, positional relationships, complete-part production, and repeatability." media="TWIN-TURRET MILL-TURN VIDEO" equipment={equipment["CNC Turning"]} processes={[
  {title:"CNC Turning",text:"Controlled diameters, faces, grooves, threads, and bores for precision rotational hardware."},
  {title:"Live Tooling",text:"Milled flats, holes, slots, and cross-features can be integrated where the selected platform supports them."},
  {title:"Mill-Turn",text:"Combined operations reduce separate setups and protect relationships between turned and milled features."},
  {title:"Twin-Turret Production",text:"Parallel-operation strategies can support repeat production when the component and route are a fit."},
]} applications={["Shafts","Housings","Bushings","Adapters","Fluid-system components","Rotational hardware"]} materials={["Stainless steel","Titanium","Inconel","A286","Aluminum","Brass"]} quality="Process planning considers runout, concentricity, axial position, thread requirements, and inspection access before production begins." previous={["CNC Milling","/capabilities/milling"]} next={["Swiss Machining","/capabilities/swiss"]}/>;}

