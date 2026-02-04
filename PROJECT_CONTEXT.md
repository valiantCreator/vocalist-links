# Project Context & Agent Guide

**Objective:** Maintain a "Dark Minimalist" aesthetics tribute page that feels premium, personalized, and intentional.

## 🎨 Design Signature (Crucial)

Any changes to the UI must strictly adhere to these signature elements.

### Footer Branding
The footer signature "Nana's Super Sweet 16 x²" is a critical brand element.
*   **Font:** Must use `Caveat` (imported via `next/font/google`).
*   **Structure:** The "x²" is not standard text. It is a composed element.
*   **Styling:**
    *   **Position:** Absolute positioning relative to the text.
    *   **Color:** `text-pink-400` (Celebratory, stands out against black).
    *   **Composition:** The `x` and `2` must **physically intersect**. Use negative margins or letter-spacing to force this overlap.

### Portrait Avatars
Recipient images are central to the personalization.
*   **Shape:** Circular (`rounded-full`), bordered (`border-white/20`).
*   **Framing:** Faces **must** be centered.
    *   **Default Rule:** Use `object-cover` with `object-position: center 20%`. This accounts for most "headshot" style cropping where the face is in the upper third.
    *   **Scaling:** For images where the face is too small or high, support `imageScale` (e.g., 1.5x) anchored to the position (e.g., `transform-origin: 50% 0%`).

## 🧠 Data Logic (The Hybrid Model)

We prioritize automation but allow manual control where it matters.

### 1. Odesli API (Default)
We use the Odesli (Songlink) API to fetch streaming links automatically based on a Spotify URL.

### 2. Manual Override (The "Fix It" Rule)
The API often fails or returns incorrect results for niche genres (e.g., African Gospel).
*   **Policy:** Do not waste cycles trying to debug the API or scrape fallback data.
*   **Action:** If a link is missing/wrong, strictly use the `manualLinks` object in `src/config/songs.ts`. This overrides the API response.

## 🛣️ Roadmap

### Personal Notes (Standard) - [COMPLETED]
*   **Goal:** Allow users to read a personal dedication note.
*   **Implementation:** A "Read Note" button triggers a responsive Glassmorphism modal.
*   **Content Rules:**
    *   **Scripture:** Philippians 1:3 (NIV) is the standard text.
    *   **Personalization:** "Dear [Name]" is dynamically injected via `getGlobalNote(name)`.
    *   **Typography:** `Caveat` font, `whitespace-pre-wrap` for layout, responsive sizing (see README).

### White Labeling (Refactor)
*   **Goal:** Abstract hardcoded colors (black background, pink accents) and fonts into a centralized `src/config/theme.ts`.
*   **Benefit:** Allows easy spinning up of new sites with different themes (e.g., White/Gold).

## 🛡️ Environment Rules

1.  **Port 3001:** ALWAYS develop on port 3001. `npx next dev -p 3001`.
2.  **Playwright Verification:** NEVER push to `main` without verified screenshots from Playwright. The browser agent is for reading/debugging; Playwright is for proof.
