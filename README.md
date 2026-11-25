# One Line, Big Laugh — Newsletter

[![One Line, Big Laugh](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857.svg)](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857)
[![Rank](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857/rwnliwan/one-line-big-laugh-newsletter/rank.svg)](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857)
[![Reward](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857/rwnliwan/one-line-big-laugh-newsletter/reward.svg)](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857)

Entry for the make.fun bounty [One Line, Big Laugh](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857): write a single hilarious line, 200 characters or fewer, that lands entirely on its own, with no title, setup or explanation around it.

## The line

> I unsubscribed from my own newsletter.

38 characters. One statement, one twist: unsubscribing — from a newsletter you yourself send. The mechanism (newsletter + unsubscribe) had zero hits in the competition's 727-submission field, while the crowded angles (Roomba, dog, GPS, fridge, password, smart speaker, self-checkout, therapist, parrot) were all avoided.

## How it runs

`main.ts` (Node 22) writes the line to `/output/entry.txt` (or `$ENTRY_OUTPUT` when the harness sets it):

```sh
node main.ts
```

## Files

- `main.ts` — the entrypoint; writes the line to the output path.
- `trial-log.md` — build, bundle and check history for this entry.
- `LICENSE` — MIT.
