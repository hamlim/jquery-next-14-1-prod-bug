# jQuery and Next.js 14.1 runtime bug

This repo is an example reproduction of an error when importing `'jquery'` into a client component.

## To Reproduce:

- Clone the repo
- Install dependencies using `bun` - `bun install`
- Start development via `bun dev`
- Visit `localhost:3000` and see an error in the console

## Details

It seems like there was a change between `14.0.5-canary.35` and `14.0.5-canary.36` that maybe changes how modules get compiled, since this wasn't an error in `-canary.35` but becomes one after that.
