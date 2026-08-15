# Generated Worker source

The interactive report runtime is deterministic generated output. It is stored as eight ordered UTF-8 fragments so each source object stays small enough for ordinary GitHub API operations.

Do not edit individual fragments by hand. Run:

```bash
npm run build
```

`scripts/reassemble-worker.mjs` concatenates `index.part-01.txt` through `index.part-08.txt`, verifies the expected SHA-256 digest, and writes `dist/server/index.js`.

The canonical research content remains independently readable in `report/` and `data/artifact.json`.

