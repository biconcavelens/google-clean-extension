# Google Clean Search (Firefox Extension)

This Firefox extension appends `&udm=14` to all Google search URLs to remove AI-generated answers and display only traditional web results.

---

## Features

- Automatically redirects Google search URLs to include `&udm=14`
- Minimal, efficient, and privacy-friendly
- Works in Firefox as a temporary or developer-installed extension

---

## Why `udm=14`?

Google's `udm=14` parameter disables the AI-generated summaries (AI Overviews) and forces the results page to show classic organic links only.

---

## Installation (Temporary in Firefox)

1. Download or clone this repository.
2. Open Firefox and go to `about:debugging`.
3. Click “**This Firefox**” > “**Load Temporary Add-on…**”
4. Select the `manifest.json` file in the project directory.

The extension will be active for the current browser session.

---

## File Overview

- `manifest.json`: Extension metadata (Manifest V2 for Firefox compatibility)
- `background.js`: Script that handles the URL redirection
- `icon.png` / `logo.icon`: Extension icon (48×48 or larger)

---

## Planned Improvements

- Support for all `google.*` domains
- Toggle or settings UI
- Chrome-compatible version

---

## Author

Created by [Trishanth Mellimi](https://github.com/biconcavelens).
