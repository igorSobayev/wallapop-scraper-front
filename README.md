## Wallapop Scraper
This is the front repository for the project Wallapop Scraper. You can find the API repository here: https://github.com/igorSobayev/wallapop-scraper

The dashboard purposo is to track any Wallapop product you want. In the dashboard you can add a list of products and the scraper will check the product update status every day/hour, this update is configurable.

The update is managed with agenda, in the free version is disable the automatic update, only the manual is available.

You can use the dashboard for free: https://wallatracker.com/

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.
