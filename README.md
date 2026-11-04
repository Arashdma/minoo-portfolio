# Minoo Koochak Dezfuli — Portfolio

A responsive, image-led graphic design portfolio built with plain HTML, CSS and JavaScript. It has no build step or external dependency and can be deployed directly to Vercel.

## Structure

```text
.
├── index.html
├── about.html
├── projects/
│   ├── mimo.html
│   ├── alef-cafe.html
│   ├── roomina.html
│   └── postcards.html
├── assets/
│   ├── css/styles.css
│   ├── js/main.js
│   └── images/
└── vercel.json
```

## Preview locally

From this directory, run:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Update portfolio content

- The current portrait is stored at `assets/images/minoo-portrait.jpg`.
- Contact links are near the bottom of `index.html`.
- Mimo and Alef Cafe are full case studies. Their web images live in `assets/images/projects/<project>/` as WebP (long edge ≤ 2000 px).
- Galleries are built from `.gallery-row` elements: each `<figure>` gets `style="--ar: width/height"` so every image in a row shares one height without cropping. Add `is-set` to rows of same-ratio images so they fall into two columns on phones, and `class="cutout"` with `--tile` for transparent PNG cut-outs on a colour tile.
- Edit the project titles, descriptions, roles and dates directly in their HTML files.

Suggested image folders:

```text
assets/images/illustration-archive/
assets/images/projects/alef-cafe/
assets/images/projects/mimo/
assets/images/projects/roomina/
assets/images/projects/postcards/
assets/videos/mimo/          # process time-lapses (H.264 MP4 + WebP poster)
```

For the web, export photographs as WebP or AVIF when possible. Keep large gallery images around 1800–2400 px wide.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Select **Other** as the framework preset if Vercel does not detect a static site.
4. Leave the build command empty and set the output directory to `.`.
5. Deploy.

The included `vercel.json` enables clean URLs and long-term caching for assets.
