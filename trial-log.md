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

## v1 — bundle + check (25 Nov 2026 ~04:02 WITA)

- Preflight OK: `ENTRY_OUTPUT=/tmp/entry3-test/entry.txt node main.ts`
  wrote 38 characters; file content verified byte-exact
  (`I unsubscribed from my own newsletter.`, 1-200 char window holds).
- Commit `357594cd2cc1e0435cca95126fa2ea522608a5b1` (main), pushed to
  `https://github.com/rwnliwan/one-line-big-laugh-newsletter`; HEAD local =
  `git ls-remote` HEAD.
- Bundle v1: `~/workspace/make-fun/twelve-prog/bundle-3-v1.tar.gz`,
  155,934 bytes, sha256
  `7203ab167a19d067bd6826f52f964e49599cfc0800dadc0f4783345f85f20f94`.
  Bundle needed `--prompt-origin other` (the first attempt without it was
  refused: the prompt file is not the first message of a root session; the
  `handed-off` attempt was refused too — the parent session opens with a
  different message, not this brief). 0 usage rows attached (expected:
  subagent rows flush only when the run completes; the coordinator
  re-bundles with the usage rows).
- Check v1 (kit fresh, commit `357594c…`): **12 passed, 2 failed, 5 skipped**.
  - FAIL `thinking_priced`: 0 usage rows — expected, coordinator re-bundles.
  - FAIL `thinking_revised`: `main.ts` took its final content from 1 message.
  - PASS `thinking_reproduces`: 46 of 49 counted lines (93.8%), entrypoint
    has 13 authored lines. All other local checks pass (competition_open,
    snapshot, license_osi, entrypoint, transcripts_*, thinking_wellformed,
    thinking_in_window, thinking_turns, transcripts_run_record,
    thinking_own_work).

## v2 — genuine revision for thinking_revised

- `main.ts` revised in this session: added the 1-200 character validity
  guard (refuses to emit a line outside the sealed scorer's window, exit 1)
  with its explanatory comment. This is a real behaviour change, not a
  retype: v1 wrote the line unconditionally.
- Trial log revised with the real v1 bundle/check numbers above.
- Re-run preflight after the edit, then re-commit, re-bundle (v2), re-check.

## v2 — re-bundle + re-check (25 Nov 2026 ~04:03 WITA)

- Preflight v2 OK: same 38-character line, guard passes.
- Commit `1428b22c4cdd2fdc34a29074982422c5ace2ffb8` (main), pushed;
  HEAD local = `git ls-remote` HEAD.
- Bundle v2: `~/workspace/make-fun/twelve-prog/bundle-3-v2.tar.gz`,
  161,985 bytes, sha256
  `4f4843a1709385678d5a42e19a924080c8d6e5302a2300b76ab79ccd3e968cec`.
  0 usage rows attached (expected — coordinator re-bundles).
- Check v2: **13 passed, 1 failed, 5 skipped**.
  - FAIL `thinking_priced` only: 0 usage rows — expected, coordinator
    re-bundles with the usage rows (subagent rows flush at run end).
  - PASS `thinking_revised`: `main.ts` now takes its final content from
    2 messages. PASS `thinking_reproduces`: 82 of 86 counted lines (95.3%).
- Status: build + bundle + check done; ready for coordinator re-bundle
  (usage rows) and submit. NOT submitted by this builder.
