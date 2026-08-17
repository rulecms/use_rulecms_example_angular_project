# RuleCMS Widget Integration - Angular Demo

A demonstration of how to integrate **RuleCMS widgets** into an Angular application using `@rulecms/widget-angular` and `@rulecms/source-components-angular`.

## Live Demo

**[View the live demo](https://use-rulecms-example-angular-project.vercel.app)**

Experience the RuleCMS Angular widget integration without running the app locally.

## What is RuleCMS?

**RuleCMS** is a visual content management system that lets you:

- Build widgets visually using a drag-and-drop composer
- Create responsive content that works across devices
- Publish instantly and get a unique published key for each widget
- Embed those widgets in any Angular app with a few lines of code

## How widget integration works

1. **Design** — Log into [rulecms.com](https://rulecms.com) and compose a widget.
2. **Publish** — RuleCMS generates a **published key** (`{environmentId}---widget-…`).
3. **Authenticate** — Create an **app token** in project settings so your app can fetch published widgets.
4. **Integrate** — Install the Angular packages, wrap the app with `rulecms-widget-provider`, and render `rulecms-widget`.

`@rulecms/widget-angular` fetches and lays out the widget. It does not ship UI cards. You register `@rulecms/source-components-angular` as the default component library so text, images, buttons, and the rest of the default set can render.

## Quick start

```bash
git clone <repository-url>
cd use_rulecms_example_angular_project
npm install
npm start
```

The app is at [http://localhost:4200](http://localhost:4200). Demo credentials in `src/app/rulecms-config.ts` are enough to render the widget without extra setup. Or skip local setup and use the [live demo](https://use-rulecms-example-angular-project.vercel.app).

## Adding RuleCMS widgets to your own Angular app

### Step 1: Install the packages

```bash
npm install @rulecms/widget-angular @rulecms/source-components-angular
```

Peer dependencies: `@angular/core` and `@angular/common` >= 17.

### Step 2: Register the library and render a widget

```ts
import { Component } from '@angular/core';
import {
  RuleCMSWidgetComponent,
  RuleCMSWidgetProviderComponent,
} from '@rulecms/widget-angular';
import * as sourceComponents from '@rulecms/source-components-angular';

@Component({
  standalone: true,
  imports: [RuleCMSWidgetProviderComponent, RuleCMSWidgetComponent],
  template: `
    <rulecms-widget-provider [token]="token" [libraries]="libraries">
      <rulecms-widget [publishedKey]="publishedKey" />
    </rulecms-widget-provider>
  `,
})
export class AppComponent {
  token = 'your-app-token';
  publishedKey = 'your-published-key';
  libraries = { default: sourceComponents };
}
```

### Step 3: Get your credentials

**App token**

1. Log into [rulecms.com](https://rulecms.com)
2. Open project settings → API / app tokens
3. Generate a token with widget access

**Published key**

1. Create or edit a widget in the composer
2. Click Publish
3. Copy the generated published key

### Step 4: Run the app

```bash
npm start
```

## This demo's credentials

Demo values live in `src/app/rulecms-config.ts` (same widget and token as the React examples):

- `DEMO_RULECMS_TOKEN` — app token used to fetch the widget
- `DEMO_PUBLISHED_KEY` — published key for the demo widget

Replace those constants with your own token and published key when you wire this up to your project.

## Understanding the packages

### `@rulecms/widget-angular`

| Piece | Role |
|---|---|
| `rulecms-widget-provider` | Supplies token, optional endpoint, and library registrations to widgets below it |
| `rulecms-widget` | Fetches a published widget and renders its layout tree |

**Provider inputs**

- `token` (required): app token from RuleCMS project settings
- `endpoint` (optional): API origin override. Leave unset so published tokens hit widget-cache and `dev.` tokens hit rulecms.com
- `libraries` (required for default cards): `{ default: sourceComponents }`

**Widget inputs**

- `publishedKey` (required): `{environmentId}---widget-…` for staging/production
- `token` / `endpoint` / `libraries`: optional overrides if you are not using the provider
- `mode`: `'client-fetch'` (default) or `'pre-fetched'`
- `componentProps`: extra host props for a component instance, keyed by column id (`r-button` reads `onClick`)

### `@rulecms/source-components-angular`

The default card library: `r-text`, `cloudinary-advanced-image`, `r-video`, `r-icon`, `r-button`, `r-divider`, `r-embed`, `r-list`, `r-accordion`. Register it on the provider. The widget package never imports this library itself.

## Multiple widgets

```html
<rulecms-widget-provider [token]="token" [libraries]="libraries">
  <header>
    <rulecms-widget [publishedKey]="headerKey" />
  </header>
  <main>
    <rulecms-widget [publishedKey]="mainKey" />
  </main>
</rulecms-widget-provider>
```

## Pre-fetched rendering

Fetch on the server (or at build time), then render without a client refetch:

```ts
import { fetchRuleCMSWidget } from '@rulecms/widget-angular';

const data = await fetchRuleCMSWidget({
  publishedKey: 'your-published-key',
  token: 'your-app-token',
});
```

```html
<rulecms-widget
  mode="pre-fetched"
  [publishedKey]="publishedKey"
  [initialData]="data"
  [libraries]="libraries"
/>
```

This demo uses **client-fetch** so `npm start` is enough.

## Host `componentProps`

Pass a click handler (or any extra prop) to one component instance by column id:

```html
<rulecms-widget
  [publishedKey]="publishedKey"
  [componentProps]="componentProps"
/>
```

```ts
componentProps = {
  'b721c4e2-…': { onClick: (event: Event) => console.log('cta', event) },
};
```

## Troubleshooting

**Widget not displaying**

- Confirm the published key and token in `src/app/rulecms-config.ts`
- Confirm `rulecms-widget-provider` wraps `rulecms-widget`
- Confirm `{ default: sourceComponents }` is registered
- Check the browser console

**Missing cards / blank layout**

- `@rulecms/widget-angular` will not render default cards unless `@rulecms/source-components-angular` is registered

## Scripts

| Command | What it does |
|---|---|
| `npm start` | Dev server at http://localhost:4200 |
| `npm run build` | Production build in `dist/` |
| `npm test` | Unit tests |

## Project structure

```
use_rulecms_example_angular_project/
├── src/
│   ├── app/
│   │   ├── app.component.ts      # Provider + widget
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   ├── app.config.ts
│   │   └── rulecms-config.ts     # Demo token and published key
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── package.json
├── vercel.json
└── README.md
```

## Learn more

- RuleCMS: [rulecms.com](https://rulecms.com)
- [`@rulecms/widget-angular`](https://www.npmjs.com/package/@rulecms/widget-angular)
- [`@rulecms/source-components-angular`](https://www.npmjs.com/package/@rulecms/source-components-angular)
- Angular: [angular.dev](https://angular.dev)

## License

MIT
