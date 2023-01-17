# Reproducible example for broken protobuf imports

This issue started showing in vitest 0.25.8. This was not a problem prior to that.

## Usage

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/ben-xD/vitest-import-issue)

- Install pnpm: run `npm install --global pnpm`
- Install dependencies: run `pnpm i`
- Run test: run `pnpm test`. Observe that it **fails**.
- Run index.ts: run `pnpm dev`. Observe that it works.