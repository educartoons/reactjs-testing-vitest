# Testing with ReactJS and Vite

## First for unit testing we will need the next package

```
pnpm add -D vitest
```

Then we need to setup the next lines in our **vite.config.ts**

```ts
/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
```

## For Component testing we will need to add the next packages

```
pnpm add -D @testing-library/react happy-dom
```

Now we need to setup our **happy-dom** in our **vite.config.ts**

```ts
/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "happy-dom",
  },
});
```

## For adding interactive actions from user

We will add the next package

```
pnpm add -D @testing-library/user-event
```

## For adding a UI for Vitest we will add the next package

```
pnpm add -D @vitest/ui
```

## For extending the methods from expect

We will install the next package

```
pnpm add -D @testing-library/jest-dom
```
