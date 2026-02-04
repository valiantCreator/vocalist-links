# Vocalist Links

A personalized tribute and music link platform built with **Next.js 16** and **Tailwind CSS**. Designed for high-fidelity mobile experiences with a "Dark Minimalist" aesthetic.

## 🚀 Quick Start

**Important:** To avoid port conflicts with other local services, always run this project on **port 3001**.

```bash
# Install dependencies
npm install

# Run development server (Port 3001)
# DO NOT use `npm run dev -- -p 3001` (causes directory errors with some shells)
npx next dev -p 3001
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

## 📂 Asset Management

All static assets reside in the `/public/images` directory.

### Naming Convention
**Strict Rule:** All image files must use **lowercase kebab-case** (e.g., `natalie.jpeg`, `moni.jpg`).
*   ❌ `Natalie.jpeg` (Case sensitivity issues on Vercel/Linux)
*   ❌ `Profile Pic.jpg` (Spaces cause URL encoding issues)
*   ✅ `natalie.jpeg`

## 🛠 Tech Stack

*   **Framework:** Next.js 16 (App Router)
*   **Styling:** Tailwind CSS 4.0
*   **Icons:** Lucide React
*   **Music Data:** Odesli API (Songlink)
*   **QR Generation:** `qrcode` (Node.js script)

## 📱 Mobile Design Standards
To ensure the handwritten 'Caveat' font remains elegant yet readable on small screens:
*   **Mobile:** `text-lg` with `leading-snug` and tight padding (`p-6`).
*   **Desktop:** `text-2xl` with `leading-loose` and spacious padding (`p-8`).
*   **Whitespace:** `whitespace-pre-wrap` is mandatory to respect stanza breaks in the configuration.

## 🚀 Deployment

### Continuous Deployment
This project is connected to Vercel. Any push to the `main` branch automatically triggers a production deployment.

### Git Workflow ("Speed Run")
We follow a streamlined "Speed Run" workflow:
1.  Develop features locally.
2.  **Verify strictly** on `localhost:3001` (visual layout, links).
3.  Commit and push directly to `main`.

```bash
git add .
git commit -m "feat: description of changes"
git push origin main
```
