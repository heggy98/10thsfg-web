# 10th SFG CZ – Web Presentation

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![i18next](https://img.shields.io/badge/i18next-localization-26A69A)
![npm](https://img.shields.io/badge/npm-package%20manager-CB3837?logo=npm&logoColor=white)

Official website for the **10th SFG CZ** airsoft/milsim team.

## Tech Stack

- **React 19**
- **TypeScript**
- **Vite 8**
- **CSS Modules**
- **i18next + react-i18next** (Czech/English localization)
- **Behold Instagram Widget** (embedded Instagram feed)

## Features

- Responsive one-page layout (Hero, About, Gallery, Contact)
- CZ/EN language switch
- Team info and recruitment section
- Instagram gallery integration
- Custom military-style visual theme

## Run Locally

### 1) Prerequisites

- **Node.js 20+** (recommended)
- **npm**

### 2) Install dependencies

````bash
npm install
````

### 3) Start development server

````bash
npm run dev
````

Then open the local URL shown in terminal (usually `http://localhost:5173/10thsfg/`).

## Available Scripts

````bash
npm run dev      # Start Vite dev server
npm run build    # Type-check and build production bundle
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
````

## Build for Production

````bash
npm run build
````

Output is generated in the `dist/` directory.

## Deployment Note

This project uses a Vite base path:

````ts
base: '/10thsfg/'
````

Keep this value if deploying under a GitHub Pages subpath like:
`https://<username>.github.io/10thsfg/`.

## Repository Structure

````text
src/
  components/    # React sections/components
  styles/        # CSS Modules
  assets/        # Images and static media
  locales/       # Translation files (CZ/EN)
````
