# Coding Guide

*Before committing*, ensure following command passes:

- `npm run commit-check`

Common tasks are present as npm scripts:

- `npm start` to run a live-reload server with the demo app
- `npm run test` to test in watch mode, or `npm run test:once` to only run once
- `npm run build` to build the library
- `npm run lint` to lint
- `npm run e2e` to run the integration e2e tests
- `npm install ./relative/path/to/lib` after `npm run build` to test locally in another app

## Release

Checklist for a release

- `npm run commit-check`
- `npm run release`
- `git push --follow-tags origin master`
- `npm run build`
- `cd dist\ngx-form-error`
- `npm publish`
