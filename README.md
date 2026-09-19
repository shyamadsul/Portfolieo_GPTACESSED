# Shyam Adsul — Portfolio

Personal portfolio for Shyam Adsul, an Endpoint & Cloud Engineer specialising in SCCM/MECM-to-Intune migration, Windows Autopilot, cloud-native policy management, security, and automation.

## Features

- Responsive desktop and mobile layout.
- Interactive skill tiles with mouse, touch, and keyboard support.
- Entrance and scroll-reveal animations with reduced-motion support.
- Detailed résumé-based experience, with a focus on LTIMindtree migration capabilities.
- Microsoft certifications and LinkedIn contact links.

## Project files

| File | Purpose |
| --- | --- |
| `index.html` | Portfolio content and page structure |
| `style.css` | Base design and responsive layout |
| `experience.css` | Detailed experience styling |
| `motion.css` | Animation and interactive-card styling |
| `motion.js` | Tile selection, desktop tilt, and scroll reveals |
| `.nojekyll` | Serve plain static files on GitHub Pages |

No build step, package manager, backend, or API credentials are required. Fonts load from Google Fonts, with system-font fallbacks.

## Run locally

Open `index.html` directly, or run this command from the repository folder:

```bash
python -m http.server 8000
```

Then open http://localhost:8000.

## Publish with GitHub Pages

In repository **Settings → Pages**, choose **Deploy from a branch**, select **main** and **/ (root)**, and save. GitHub then publishes the static site and republishes it when changes are pushed to main.

Pages availability for private repositories depends on the account plan. Enabling Pages is a separate repository setting; uploading these files alone does not enable it.

## Edit the portfolio

Update text in `index.html`, styles in the CSS files, and skill descriptions in `motion.js`. Keep the four skill tiles and their description order aligned. Commit and push changes to main.

Check navigation links, tile selection by click and Enter/Space, mobile layout, and reduced-motion behaviour after editing.

## License

See the existing [LICENSE](LICENSE).
