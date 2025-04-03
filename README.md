# 🧱 mcf-kind-ui

`mcf-kind-ui` is a shared React component library built with [Material
UI](https://mui.com/) and TypeScript. It provides a consistent design
system across Murphy Charitable Foundation projects, including shared
themes, typography, color palettes, and reusable components.

---

## Purpose

This package ensures **visual consistency**, **development speed**,
and **shared maintenance** across all frontend apps within the Murphy
Charitable Foundation ecosystem.

Use `mcf-kind-ui` to:

- Apply a centralized MUI theme
- Use shared typography and color tokens
- Reuse common components like buttons, inputs, layout primitives,
  etc.

---

## Project Structure

```bash

src/
├── components/         # Reusable shared components
├── theme/              # MUI theme, palette, typography
└── index.ts            # Barrel file for exports

```

## 📦 Installation

### From GitHub Packages

```bash

npm install @MurphyCharitableFoundation/mcf-kind-ui

```

### Usage 

```tsx

// main.tsx or index.tsx

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme, CustomButton } from "@MurphyCharitableFoundation/mcf-kind-ui";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);

```


## Contributing

1. Local development setup
```bash

git clone https://github.com/murphycharitablefoundation/mcf-kind-ui.git
cd mcf-kind-ui
npm install

```

1. Build package, auto-build on changes:
```bash

npm run dev

```

1. Use in local app (via npm link)
```bash

npm link

```

1. In your consuming project directory:
```bash

npm link @MurphyCharitableFoundation/mcf-kind-ui

```

## Publishing

1. Bump the version
```bash
	
npm version patch     # or minor / major
	
```

1. Publish
```bash
   
npm publish --registry=https://npm.pkg.github.com

```

3. Update consuming projects:
```bash

npm install @MurphyCharitableFoundation/mcf-kind-ui@latest

```
