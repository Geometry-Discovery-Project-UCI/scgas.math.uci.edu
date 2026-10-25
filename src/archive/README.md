# Seminar archives

The year directories contain independent source snapshots:

- `2023`: `origin/2023-version`, commit `2f978c31de138d19a3eb08be5b066b8616117b9e`.
- `2025`: `main`, commit `4927703107e7c6b0120b629a77883c3b0311bd01`.

Their imports are local to the snapshot. Their routers are based at
`/archive/2023/` and `/archive/2025/`. Only routing, archive navigation, document
titles, and local PDF URLs have been adapted. The original 2023 poster is
identical to the existing `/pdfs/posters/2023-poster.pdf`; all other 2023 public
assets are also identical to their current counterparts. PDF files are shared
from `public/pdfs` and should be preserved when updating the current seminar.

`src/main.ts` selects the application from the URL and lazy-loads that snapshot.
Use ordinary links when entering or leaving an archive so its application loads;
internal archive navigation uses its own Vue Router. Updating the current
seminar's configuration, participants, or views will not update these snapshots.

The usual `pnpm run serve` and `pnpm run build` include both archives. As with the
current site, production hosting must fall back to `/index.html` for application
routes (including `/archive/2023/program` and `/archive/2025/participants`).
For nginx, use `try_files $uri $uri/ /index.html;` in the site's `location /`.
