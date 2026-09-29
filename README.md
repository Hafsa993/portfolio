# hafsa993.github.io

My personal website: about me, projects and contact. Plain HTML, CSS and a little JavaScript, no build step.

## Run locally

```bash
python -m http.server 8000
```

Then open http://localhost:8000.

## Files

- `index.html`: all page content
- `styles.css`: layout and colours (light and dark theme tokens at the top)
- `script.js`: theme toggle, mobile menu, project links that aren't live yet
- `assets/img/`: project images (1024×512 WebP)
- `assets/Hafsa_Sheikh_CV.pdf`: the CV behind the "Download CV" buttons

## Common edits

**Make a project link live.** Each project link in `index.html` has a `data-live` attribute. While it's `"false"` the link shows "Coming soon" and can't be clicked. Change it to `"true"`:

```html
<a class="project-link" href="https://salahcalendar.app" data-live="true">salahcalendar.app</a>
```

**Add a project.** Copy one of the `<article class="project">` blocks (featured) or `<article class="card">` blocks (smaller cards) and change the text. Put a 1024×512 image in `assets/img/`.

**Update the CV.** Replace `assets/Hafsa_Sheikh_CV.pdf` and keep the file name.

## Deploy (GitHub Pages)

1. Create a public repo named `Hafsa993.github.io` on GitHub.
2. `git remote add origin https://github.com/Hafsa993/Hafsa993.github.io.git`
3. `git push -u origin main`
4. The site is live at https://hafsa993.github.io after a minute. A custom domain can be added under *Settings → Pages*.
