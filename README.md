# gta6-clipper-01 — Clip GTA 6 for the most YouTube views

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/Jacktt55/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/Jacktt55/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

Entry for make.fun's `gta6-clipper-01` bounty: cut one GTA 6 moment into a
short vertical clip that pitches make.fun, publish it publicly on YouTube,
and hand in its address here. Places go by the video's views.

## The clip

One moment from Rockstar's official **GTA VI Launch Trailer** (15 October
2026, captured in-game on PS5): the heist shootout climax — masked crew,
a road explosion, a rooftop standoff, a helicopter over Vice City, Jason
with a sniper rifle, and Lucia firing her rifle with an explosion behind
her. Nine seconds of escalating action, cut to vertical 9:16 (1080x1920)
with ffmpeg, then a pitch card on a darkened still of the explosion frame:

> Make clips like this with AI and earn money on make.fun
> make.fun/bounty/gta6-clipper-01

The clip is 17.6 seconds, so it publishes as a YouTube Short. The footage
is Rockstar's own trailer — no streamer footage, no finished clip reused.

## The video

`VIDEO.json` at this repository's root names the published Short:

```json
{"url": "https://www.youtube.com/shorts/qiVSyhy0XFk"}
```

Watch it here: https://www.youtube.com/shorts/qiVSyhy0XFk

Its description carries the bounty's line word for word and the entrant's
make.fun play code.

## The program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` to
`/output`. That is all it has to do — the house reads the video itself
through the YouTube Data API.

```bash
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Bounty

https://make.fun/bounty/gta6-clipper-01 — $500 over 20 places, entries
close 23 November 2026 01:00 UTC.

Referral code: 7kmtfwak (https://make.fun/r/7kmtfwak)
