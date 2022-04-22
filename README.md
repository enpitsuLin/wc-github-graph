# wc-github-graph

A Web component displays Github contributions graph.

inperied from [react-github-graph](https://github.com/kylekarpack/react-github-graph)

![wc](https://user-images.githubusercontent.com/29378026/164646290-0f122e45-eb21-47b8-8cf0-a49bf6707fae.png)

## Usage

### By CDN

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/wc-github-graph@latest" />

<github-corners username="your-username"></github-corners>
```

### By NPM

```sh
npm install wc-github-graph
```

import in your project entry

```typescript
// mian.ts
import 'wc-github-graph'
```

use it

```html
<github-graph username="your-username" />
```

## API

### Example

```html
<github-graph username="your-username"> </github-graph>
```

### FAQ

1. How can I use it in Vue ?
   > see [web-components](https://vuejs.org/guide/extras/web-components.html)
