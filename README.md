## Run project
In root, run:  
- `ddev start` to start the DDEV project environment
- `ddev npm run dev` to start the Vite dev server

## Installation

1. Create DDEV configuration files:  
   `ddev config --project-type=craftcms --docroot=web`

2. Scaffold the project from the official starter project:  
   `-ddev composer create -y "craftcms/craft"`

3. Install the vite plugin for Craft:  
   `ddev composer require "nystudio107/craft-vite:^5.0.1" -w && ddev craft plugin/install vite"`

4. Added files and their boilerplates from Wiljagruppen:  
   `config/vite.php`  
   `package.json`  
   `vite.config.js`

5. Install vite on ddev:  
   `ddev npm install vite --save-dev`

## Add files

### In root:

`vite.config.js`  
`package.json`  
`viteEntryPoint.js`  
`.env`  
`.gitignore`  
`src/`

- `main.js`
- `style.css`
- `public/`
- `Rest of css and js folders/files that you want`

### In .ddev/:

`docker-compose.vite.yaml`

### In config/:

`vite.php`

### In templates/:

`\_layouts/base.twig`  
`\_partials/`  
`about.twig`  
`contact.twig`  
`404.twig`  
`index.twig`

## How vite.config.js, package.json, and viteEntryPoint.js Work Together

1️⃣ vite.config.js – The Project Architect 🏗️
Think of this file as the blueprint for how Vite should build and serve your project. It controls things like:

- Where files go when built (outDir: 'web/dist/')
- What should be included (input: { app: 'viteEntryPoint.js' })
- Plugins for extra functionality (e.g., compression, cache busting)
- Development server settings (server: { port: 3000 })
- 👉 It tells Vite what to do with the project files.

2️⃣ package.json – The Toolbox 🛠️
This file is like a shopping list for everything your project needs. It includes:

- Project name & version
- Installed dependencies (dependencies for runtime, devDependencies for development)
- Scripts like "dev": "vite" to run the server
- 👉 It makes sure you have all the tools needed to run Vite and your project.

3️⃣ viteEntryPoint.js – The Construction Crew 🚧
This is the starting point for bundling your files. It tells Vite what to include by importing:

- CSS (import "./src/css/style.css";)
- JavaScript (import "./src/js/main.js";)
- Since Vite uses this file as its entry point (as defined in vite.config.js), it grabs everything it needs from here and processes it.
- 👉 It gathers your project's main files and prepares them for Vite.

### How They Work Together 🤝

1️⃣ vite.config.js configures how Vite should work  
2️⃣ package.json manages all the required dependencies  
3️⃣ viteEntryPoint.js collects the main files for Vite to bundle

So when you run npm run dev, Vite:  
✅ Reads vite.config.js to set up the environment  
✅ Uses package.json to load dependencies  
✅ Starts bundling from viteEntryPoint.js

That’s why all three files depend on each other to make the project work! 🚀

### Theese files

- // CSS bootstrap file
  `import "./src/css/style.css";`
- // JS bootstrap file
  `import "./src/js/main.js`

are served from vite to craft on  
`https://emilies-keramik.ddev.site:3000/viteEntryPoint.js`  
They let me update the js and css in my Twig files with HMR.

## What vite.php Does in Relation to Vite

The vite.php file acts as the bridge between Vite (which handles the frontend) and Craft CMS (which runs the backend). It ensures that Vite’s assets (like JavaScript and CSS files) are loaded properly in Craft templates.

## What docker-compose.vite.yaml Does in Relation to Vite

This file configures Docker to expose Vite’s dev server (localhost:3000) within the DDEV environment. Think of it as opening a port so that Vite can be accessed by Craft CMS and the browser.

## How .env Relates to Your Vite and Craft Setup

Your .env file acts as a central configuration hub 🛠️, storing environment-specific settings. Other files like vite.php, vite.config.js, and docker-compose.vite.yaml use these environment variables to dynamically adjust their behavior.

## Summary of vite.php, docker-compose.vite.yaml, and .env

These three files work together to configure how Craft CMS and Vite interact in a local development environment using Docker.

1️⃣ vite.php → Connects Craft to Vite  
📌 Purpose: Controls how Craft CMS loads Vite assets.

✅ Uses .env variables like VITE_USE_DEV_SERVER to decide whether to:

- Load assets from Vite's dev server (localhost:3000) (during development)
- Load assets from the built dist/ folder (in production)

✅ Uses PRIMARY_SITE_URL to generate correct asset URLs.

🛠 Key relationships:

- Depends on .env for environment settings.
- Works with vite.config.js to determine how assets are built/served.

2️⃣ docker-compose.vite.yaml → Exposes Vite's Dev Server in Docker  
📌 Purpose: Ensures that Vite's development server (port 3000) is accessible inside the DDEV container.

✅ Maps port 3000 so that Vite can be reached from outside the container.  
✅ Uses DDEV_ROUTER_HTTP_PORT and DDEV_ROUTER_HTTPS_PORT to align with DDEV’s networking.

🛠 Key relationships:

- Required for Vite to work in Docker.
- Ensures Craft CMS can access http://localhost:3000 (as defined in vite.php).

3️⃣ .env → Stores Environment Variables  
📌 Purpose: Defines environment-specific settings for Craft, Vite, and Docker.

✅ Controls which assets Craft loads (via VITE_USE_DEV_SERVER).  
✅ Defines the site URL (PRIMARY_SITE_URL), which vite.php uses to build asset paths.  
✅ Configures Docker and Craft’s environment (CRAFT_ENVIRONMENT, CRAFT_DEV_MODE).

🛠 Key relationships:

- vite.php reads .env to determine if Vite’s dev server should be used.
- docker-compose.vite.yaml uses .env for port configurations.

### How They Work Together

1️⃣ .env defines settings (e.g., whether to use Vite’s dev server or built files).  
2️⃣ vite.php reads .env and tells Craft where to load assets from.  
3️⃣ docker-compose.vite.yaml makes sure Vite’s server is accessible inside the DDEV container.

🔗 Without these files working together, Vite wouldn't serve assets properly in Craft CMS inside Docker!

## Maintenance
- Check for updates: `ddev craft update`
- Run `ddev craft update all`  to perform the update.


