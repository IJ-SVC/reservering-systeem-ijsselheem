This is a Next.js starter project preconfigured for Appwrite.

## Appwrite setup

1. Install dependencies:

```bash
npm install
```

2. Copy `.env.example` to `.env`.
3. Fill in your Appwrite values:
   - `NEXT_PUBLIC_APPWRITE_ENDPOINT`
   - `NEXT_PUBLIC_APPWRITE_PROJECT_ID`
   - `NEXT_PUBLIC_APPWRITE_PROJECT_NAME`

## Getting started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the default screen.

## Included Appwrite helpers

- `lib/appwrite/config.ts`: central place for Appwrite environment variables.
- `lib/appwrite/client.ts`: shared Appwrite `Client`, plus `Account`, `Databases`, and `Storage` helpers.
