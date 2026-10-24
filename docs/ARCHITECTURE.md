# Architecture

Static HTML pages built with Vite. The content/build scripts produce inspectable semantic pages before any browser JavaScript runs. A small module adds explanation sliders and the guided demonstration. PDF.js, jsPDF and fflate are lazy-loaded.

```
Fixed fictional PDF
  → PDF.js text geometry
  → source-derived panel parser
  → original row labels + units + separately reported total
  → reconciliation + coverage checks
  → explicit human confirmation
  → reviewed record
      → deterministic 38-compound / 10-profile classifier
      → SVG fingerprint + full-score band
      → partner template adapter
          → square / profile / story SVG → PNG
          → featured menu SVG → US Letter PDF
          → all variants + original record → ZIP
```

## State and privacy

The example selector controls the source report. Switching reports clears the prior review and outputs. Withdrawing confirmation hides and invalidates generated outputs. Controls that could change the record are locked while an export is being prepared. Records remain in memory; there is no persistence, API, analytics or transmission of report data.

The same `record` object supplies all output functions; no values are retyped into templates. Each includes its batch ID and fictional-study label. The record JSON preserves source rows, model version and coverage. The ZIP contains that record alongside all versions.

## Model boundaries

Original engine, parser, alias and PDF geometry files are preserved in `source/flower-spectrum-suite/`. Runtime foundations are copies. Runtime profile data deliberately retains only canonical IDs, labels, order and colors; historical effects copy is not used. The new fingerprint renderer uses ten concentric stroke groups with extent proportional to unrounded scores, scaled against the highest score. This changes the visual treatment while keeping the category order and meaning.

The inherited classifier uses a weighted sum and an explicit Gas/Fuel co-occurrence heuristic. It is not a trained AI model. Original-suite OCR exists separately; the new walkthrough uses text PDFs and does not claim scanned-report support.

## Export details

PNG: 1080×1080, 1080×1350 or 1080×1920. SVGs remain editable, using common system fonts. Menu PDF: one US Letter page, 612×792 points, containing a 1700×2200-pixel render. It is an illustrative feature sheet, not a regulatory label or a physical-print certification.

## Deployment isolation

New GitHub repository and Vercel project both named `flower-spectrum-case-study`. No configuration or source changes are made to the existing Flower Spectrum or PRESSWRK deployments. No environment variables required. `.env*` and `.vercel` are excluded from Git and uploads.
