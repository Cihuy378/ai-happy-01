// ai-happy-01 entry (Node 22, standard library only): the image beside this file is copied
// to /output/entry.png. The image is a warm digital painting: a small robot with glowing happy
// eyes and a red knitted scarf hands a glowing cupcake to a laughing girl while a puppy jumps
// for joy and paper birds flutter above, holding a card that reads "FOR YOU, JUDGE!" — made to
// make the AI judge happy. The gate takes a whole PNG or JPEG of at most 1 MiB and 1024 by 1024
// pixels, and the judge sees exactly the bytes copied.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const src = new URL('./entry.png', import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const dest = join(outDir, 'entry.png');
copyFileSync(src, dest);
// Guard against a partial write: the judge must see exactly the bytes shipped.
if (statSync(src).size !== statSync(dest).size) throw new Error('entry.png copy size mismatch');
