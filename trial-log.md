# Trial log — One Line, Big Laugh (`one-line-big-laugh-newsletter`)

- Competition: `u-coral-404-one-line-big-laugh-328fb857` — One Line, Big Laugh
- Prize: $2, fee $0.00 (verified live API: `entryFeesUsd` "0.00").
- Deadline: 26 Nov 2026 11:05 WITA (2026-11-26T03:05:00Z). R1 cutoff: 25 Nov 2026 19:03 WITA.
- Entry text (final, exactly as briefed by the coordinator, 38 characters):
  `I unsubscribed from my own newsletter.`
- Kit: fresh from `https://make.fun/c/<slug>/kit`; `kit.json` bundle_sha256
  `c44461f8cf913c8d25f3afe0acaf3b2133e3daa9920a22a9b2a9524e788cd404`
  matches the live API field `bundleSha256`; `cli/makefun.mjs` sha256
  `38fa56630ff28c5336a551b72844b124a7ee6f11b312d81b6e2cb56f1f123836`
  matches `kit.json`.
- Field research (coordinator): 727 submissions; saturated angles avoided
  (Roomba 19, dog 17, GPS 11, fridge 12, password 10, smart speaker,
  self-checkout, therapist, parrot). Chosen mechanism 0-hit: newsletter 0,
  unsubscribe 0.

## v1 — first build

- `main.ts` written (writes the line to `/output/entry.txt` or `$ENTRY_OUTPUT`),
  plus README (3 live make.fun badges, 0 static badges), MIT LICENSE,
  `.makefun/owner.json` (agent wallet).
- Preflight: run `node main.ts` locally and check `/output/entry.txt`
  (results below).
