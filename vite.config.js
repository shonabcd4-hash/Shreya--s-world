# Bachha's Little Universe

A small interactive React + Vite story website created as a cozy, personalized digital world for Shreya.

## Features

- Intro screen with floating island and welcome text
- Six explorable areas: welcome garden, friends corner, memory tree, storybook path, letter house, and final chapter
- Interactive budgie and turtle characters
- Memory leaves and a story timeline
- Letter-reading experience
- Optional contact invitation toggle
- Music toggle with browser-local preference saved automatically
- Responsive layout for mobile and desktop
- Editable story content in a single config file

## Run locally

1. Install dependencies:
   npm install
2. Start the development server:
   npm run dev
3. Open the local URL shown in your terminal.

## Build for production

npm run build

## Customize the content

Most of the website text is stored in:

- src/data/content.js

You can update:
- welcome text and title
- garden notes
- pet names and configuration
- memory cards
- timeline chapters
- letter text
- final message and contact settings

## Deployment

After building, deploy the `dist` folder to any static host such as:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## Notes

- This project is static and does not require a backend.
- Optional sensitive content is disabled by default.
- Music is muted by default and only stored locally in the browser.
