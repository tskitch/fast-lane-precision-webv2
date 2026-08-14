import type { Metadata } from "next";
import { CapabilityDetail } from "@/components/sections/CapabilityDetail";
import { equipment } from "@/data/equipment";
export const metadata: Metadata = { title: "3, 4 & 5-Axis CNC Milling", description: "Multi-axis CNC milling for complex aerospace and defense components." };
export default function Page(){return <CapabilityDetail index="01.1" eyebrow="CNC MILLING" title="Geometry without compromise." summary="3-, 4-, and 5-axis machining strategies for complex aerospace geometry, controlled positions, and fewer part handoffs." media="5-AXIS MACHINING PHOTO" equipment={equipment["Multi-Axis Milling"]} processes={[
  {title:"3-Axis Machining",text:"Efficient production of prismatic features, precision pockets, bores, faces, and profiles."},
  {title:"4-Axis Indexing",text:"Indexed access to multiple faces helps preserve feature relationships and reduce refixturing."},
  {title:"Multi-Axis Machining",text:"Positional or simultaneous strategies are selected where geometry and machine configuration support them."},
  {title:"Prototype → Production",text:"Planning scales from first hardware and prove-out through repeat and higher-volume production."},
]} applications={["Structural components","Brackets","Precision housings","Mounting hardware","Test hardware","Complex contoured parts"]} materials={["Aluminum","Titanium","Stainless steel","Inconel","A286","Engineering plastics"]} quality="Workholding, datum structure, tool access, in-process checks, and final reporting are reviewed against the drawing. Tolerance capability is geometry-, material-, and process-dependent." previous={["Capabilities","/capabilities"]} next={["CNC Turning","/capabilities/turning"]}/>;}

