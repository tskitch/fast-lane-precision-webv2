# Fast Lane Precision

A complete, responsive website for Fast Lane Precision, a Riverside, California aerospace and defense precision manufacturer. The project uses the Next.js App Router-compatible Vinext runtime, TypeScript, Tailwind CSS, Motion, and Lucide React.

## Setup

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal. For a production check:

```bash
npm run lint
npm run build
npm run start
```

`pnpm install`, `pnpm dev`, `pnpm lint`, and `pnpm build` are also supported.

## Routes

- `/` — Home
- `/capabilities` — Manufacturing overview
- `/capabilities/milling` — 3-, 4-, and 5-axis milling
- `/capabilities/turning` — CNC turning and mill-turn
- `/capabilities/swiss` — Citizen Swiss machining
- `/quality` — Quality system and inspection
- `/industries` — Markets served
- `/about` — Company story and operating approach
- `/contact` — RFQ interface
- `/privacy` — Legal-review privacy draft

## Structure

```text
app/                 Routes, metadata, global styles, sitemap, and robots
components/layout/   Header, navigation, and footer
components/sections/ Shared editorial page structures
components/forms/    RFQ interface and local demo handler
components/ui/       Technical labels, links, and media placeholders
data/                Company facts, capabilities, equipment, and industries
public/              Favicon and future approved media
```

## Updating company information

Edit `data/company.ts`. Phone and RFQ email intentionally remain visible placeholders because publicly available phone listings conflict and no approved RFQ email was verified. Confirm the address, certification status, registration, contact information, and every capability statement with Fast Lane Precision before launch.

## Replacing media placeholders

`components/ui/MediaPlaceholder.tsx` provides the temporary visual system. Replace each instance with a locally hosted, approved image or video while preserving its container and aspect ratio. Optimize images, provide descriptive alt text, caption video where needed, and avoid remote stock dependencies.

## Customer logos

The homepage customer band is explicitly placeholder-only and does not assert endorsement or a current relationship. Obtain written approval and verify every company relationship before replacing placeholders with approved logo files.

## Certificate PDFs

1. Obtain current, approved PDF files.
2. Add them beneath `public/documents/`.
3. Replace disabled buttons in `app/quality/page.tsx` with descriptive download links.
4. Confirm certificate scope, issue date, expiration date, and public-distribution approval.

Do not publish the older certificate discovered during research as proof of current certification; its printed expiration date has passed.

## Connecting the RFQ form

The form currently validates locally and displays an honest integration notice. It does not send, retain, or upload information.

Before enabling production submissions:

1. Select an approved Fast Lane Precision email, CRM, or secure RFQ endpoint.
2. Implement server-side validation, abuse protection, consent, retention, and error handling.
3. Provide an approved secure-transfer workflow for controlled technical files.
4. Keep file upload disabled until export-control and data-security requirements are documented.
5. Test success, failure, spam, keyboard, and assistive-technology paths.

## Metadata

Site-wide metadata and Organization JSON-LD are in `app/layout.tsx`. Route-specific titles and descriptions live in each `page.tsx`. Update the production domain in metadata, `app/robots.ts`, and `app/sitemap.ts` if the canonical host changes.

## Deployment

For Vercel, import the repository, keep the standard install command, use `npm run build`, and deploy. Validate all Vinext/Next compatibility requirements against the selected host before changing the included Sites-compatible Vite configuration.

## Final pre-launch checklist

- [ ] Verify every capability claim
- [ ] Verify all certifications and ITAR registration
- [ ] Add approved Fast Lane Precision logo
- [ ] Add approved customer logos and confirm relationship/usage permission
- [ ] Replace all media placeholders with optimized approved assets
- [ ] Confirm phone, email, and street address
- [ ] Connect an approved secure RFQ backend
- [ ] Add a privacy policy reviewed by counsel
- [ ] Add current approved certificate PDFs
- [ ] Test form success, errors, and abuse handling
- [ ] Test 360 px, 390 px, tablet, laptop, 1440 px, and wide layouts
- [ ] Run accessibility checks, including keyboard, screen reader, and contrast
- [ ] Run `npm run lint`
- [ ] Run `npm run build`
- [ ] Confirm the export-control handling and secure-transfer process
- [ ] Review all customer and program language with legal/compliance
- [ ] Confirm canonical domain, analytics consent, and production metadata
