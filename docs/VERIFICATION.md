# Verification

Release date: October 23, 2026 (America/Los_Angeles).

## Completed locally

- 19 automated tests passed: source checksums; canonical identity/colors; all fictional panel totals; human review gate; mismatched totals; unknown mass; units/result columns; invalid results; source isomers; copied source rows; determinism; empty input; weighting explanation; distinct sample profiles; consistent partner adapters; rendered identity/label preservation; XML escaping.
- Production build passed with Vite 8.3.5. Local Node 26 emits the expected engine warning; the deployment is configured for Node 24.
- Dependency audit resolved the initial Vite/fflate patch advisories. `npm audit` reported zero vulnerabilities after patching.
- Actual browser PDF reads passed for all three reports: 7 rows / 2.30%, 6 rows / 1.90%, 5 rows / 1.73%.
- Human confirmation required before record creation. Withdrawal invalidates the output. Selecting a different report clears previous results.
- Slider example changed Floral to Earth, handled all-zero input, and reset correctly.
- PNG downloaded and inspected at 1080×1080. ZIP downloaded and validated: 14 entries, 12 editable SVGs, the shared JSON and readme; every SVG preserved FS-STUDY-01.
- Menu PDF downloaded, parsed and rendered: one page, 612×792 points. Visual inspection confirmed complete content and fictional-study label.
- All four pages checked at 320, 390 and 1440 CSS pixels: no horizontal document overflow. Generated walkthrough output also checked at those widths. Hidden images intentionally have no source until review.
- Original suite classifier, labels and print-menu screens inspected and captured from the live public app.

## Release checks

Production deployment, stable routes, live PDF flow and preservation checks are recorded in `RELEASE.md` and `qa/` after publication.

## Limits

This validates a controlled portfolio demonstration, not arbitrary lab formats. Native OCR, remote partner distribution, social account publishing, POS inventory and cross-device synchronization are not implemented in this new case-study site. No formal usability or sensory validation was performed. No sales/revenue improvement is claimed. Physical print alignment and color reproduction remain unverified.
