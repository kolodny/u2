u2
===

## Install

```bash
npm install -g u2
```

## Usage

```bash
u2 'npm run watch' 'npm run serve'
```

### Why

While it is possible to do something like `npm run watch & npm run serve`
that causes `npm run watch` to run in the background and killing the parent process
won't terminate it