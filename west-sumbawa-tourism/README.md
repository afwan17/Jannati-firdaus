This is West Sumbawa Tourism — an interactive tourism map built with Next.js and React Leaflet.

## Getting Started

First, install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

You can start editing by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

Tech stack:
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Leaflet + React-Leaflet (OpenStreetMap tiles)

Key files:
- `src/components/MapView.tsx`: Map with clickable areas and place markers
- `src/components/Sidebar.tsx`: Area selector + places list
- `src/data/areas.ts`: Tourism data for West Sumbawa

To extend data, edit `src/data/areas.ts` to add areas and items.
