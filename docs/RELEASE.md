# Release — October 23, 2026

- GitHub: https://github.com/cannacre8ive/flower-spectrum-case-study
- Stable production: https://flower-spectrum-case-study.vercel.app/
- Vercel project: `flower-spectrum-case-study`, owner `lucidseshs-projects`.
- Project ID: `prj_rvUSrZmFkLnAVpHmeqEUYSSxSYRl`.
- Initial application commit: `914cfb2`.
- Initial production deployment: `dpl_CsykwRBtqTaaZ73qsratF7HvWQBh`, READY.
- Deployment URL: https://flower-spectrum-case-study-slwckdin9-lucidseshs-projects.vercel.app
- Git integration connected to the new repository. Subsequent documentation commits can trigger an equivalent production rebuild.

## Verified production behavior

All four public pages, all three PDF fixtures, product screenshots, share image, favicon, robots and sitemap returned HTTP 200. An unknown route returned 404. See `qa/production-http.json`.

The live browser read study-01.pdf, showed seven source rows and a 2.30% reconciled total, required confirmation and generated FS-STUDY-01. Switching to Partner B and Story preserved the record. A matching menu PDF downloaded successfully. Browser error/warning logs were empty for the production flow. The production screenshot is `qa/production-home.jpg`.

## Preservation

All four pre-existing deployments returned HTTP 200 and exactly matched their before-release homepage SHA-256 values: Flower Spectrum Suite, original COA Classifier, Menu Generator and PRESSWRK Studio. See `qa/original-deployments-before.json` and `qa/original-deployments-after.json`. No writes were sent to those projects or their checkouts.

## Source and credential hygiene

Original source snapshots match their manifest. The fresh repository contains no environment files or Vercel credentials. Git and deployment upload ignores exclude `.env*` and `.vercel/`. The application requires no environment variables.
