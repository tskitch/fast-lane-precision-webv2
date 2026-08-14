export const capabilities = [
  {
    id: "CAP—01",
    slug: "milling",
    title: "Multi-Axis Milling",
    summary: "Controlled 3-, 4-, and 5-axis workflows for complex geometry, positional features, and reduced setups.",
    bullets: ["3 / 4 / 5-axis machining", "Complex bores, pockets + contours", "Prototype through production"],
    media: "5-AXIS MACHINING PHOTO",
  },
  {
    id: "CAP—02",
    slug: "turning",
    title: "CNC Turning + Mill-Turn",
    summary: "Tight control of concentric, positional, and milled features on rotational components.",
    bullets: ["Live-tool turning", "Twin-turret mill-turn", "Finished-part strategies"],
    media: "DOOSAN MILL-TURN VIDEO",
  },
  {
    id: "CAP—03",
    slug: "swiss",
    title: "Swiss Machining",
    summary: "Repeatable bar-fed production for precision fasteners and small-diameter components in difficult materials.",
    bullets: ["Citizen L12 + L20", "A286 + Inconel production", "Secondary milled features"],
    media: "CITIZEN SWISS MACHINING VIDEO",
  },
  {
    id: "CAP—04",
    slug: "../quality",
    title: "Quality + Inspection",
    summary: "Inspection, traceability, and reporting planned into the manufacturing route—not added at the end.",
    bullets: ["Zeiss + Keyence systems", "FAI / AS9102 support", "Material + lot traceability"],
    media: "QUALITY LAB / ZEISS CMM PHOTO",
  },
] as const;

