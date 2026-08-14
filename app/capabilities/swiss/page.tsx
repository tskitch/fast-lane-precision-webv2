import type { Metadata } from "next";
import { CapabilityDetail } from "@/components/sections/CapabilityDetail";
import { equipment } from "@/data/equipment";
export const metadata: Metadata = { title: "Citizen Swiss Machining", description: "Swiss machining for precision fasteners and small-diameter production components." };
export default function Page(){return <CapabilityDetail index="01.3" eyebrow="SWISS MACHINING" title="Small diameter. Production discipline." summary="Citizen Swiss machining for repeatable bar-fed production, precision fasteners, and feature-dense components in demanding materials." media="CITIZEN SWISS MACHINING VIDEO" equipment={equipment["Swiss Machining"]} processes={[
  {title:"Bar-Fed Production",text:"Efficient, repeatable production routes for small-diameter components and precision fasteners."},
  {title:"Guide-Bushing Support",text:"Swiss process fundamentals help control long, slender, and feature-dense components."},
  {title:"Secondary Features",text:"Cross holes, flats, slots, and other milled details may be integrated where appropriate."},
  {title:"Difficult Materials",text:"Process experience includes A286, Inconel, stainless steel, titanium, and other aerospace alloys."},
]} applications={["Precision fasteners","Pins","Bushings","Small shafts","Fluid fittings","Threaded components"]} materials={["A286","Inconel","Stainless steel","Titanium","Brass","Engineering plastics"]} quality="Repeat production is supported by in-process verification, tool-life awareness, lot traceability, and final dimensional reporting matched to customer requirements." previous={["CNC Turning","/capabilities/turning"]} next={["Quality + Inspection","/quality"]}/>;}

