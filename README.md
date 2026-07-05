# iWrite - Minimalist Storytelling Blog (Showcase Skeleton)

> [!IMPORTANT]
> **Showcase Only:** This repository contains a public skeleton version of the **iWrite** blog. It is created to show the project structure, code design, animations, and configurations. The main project (which contains the custom page layouts, specific styling, blog posts, and database setup) is kept in a private repository to prevent direct duplication.

This is a clean, minimal Vite and React project built for digital storytelling, creative essays, and personal blogs. It combines clean typography with smooth animations to create a distraction-free space for reading and writing.

> **Project Origin & Intent:** This project was originally designed and built to be my **personal blogging website**—a dedicated place to write and share my creative articles and essays. Although I am not actively posting new content on it at this time, the codebase was fully built to function as a responsive, ready-to-use publishing workspace.

---

## Technical Stack

- **Framework**: React (v19) and Vite
- **Styling**: Styled-Components
- **Animations**: GSAP, Anime.js, and Framer Motion
- **Scroll Handler**: Lenis (Smooth Scroll)
- **Routing**: React Router (v7)
- **Metadata**: React Helmet

---

## Design and UI/UX Details

The layout of iWrite is designed to look like a clean, online magazine. We focused on making the text very easy to read on all screens.

### Clean Typography
- We use classic Serif fonts for headings to make them look like printed books.
- The main body text uses a clean Sans-Serif font (Inter) so it is easy to read long articles.
- We limited the width of the text area so readers do not have to stretch their eyes across wide desktop screens.

### Animations and Page Transitions
- **Smooth Page Transitions**: When you change pages, a smooth full-screen cover slides down, updates the page behind it, and slides back up. This keeps the page from flickering or jumping suddenly.
- **Hover & Touch Reactions**: Buttons, links, and cards react gently when you hover over them on a computer or tap them on a phone.
- **Consistent Scrolling**: We added smooth scrolling (using Lenis) so that scrolling feels natural and consistent, whether using a trackpad, mouse, or touch screen on any device.

---

## Performance and Optimizations

We optimized the template to ensure fast loading times and good search engine presence.

### Search Engine Optimization (SEO)
- The code includes a reusable SEO component that automatically handles page titles, descriptions, and search engine rules.
- It manages canonical links so search engines know the original page and do not flag duplicate content.
- It includes Open Graph tags so your posts look clean and professional when shared on social media like Twitter or Facebook.
- It supports search indexing configurations (JSON-LD structured data) so articles show up properly in Google search results.

### Edge Network Features
- **Fast Maintenance Redirects**: Redirects are processed on Vercel's global Edge network. If the site is under maintenance, Vercel redirects visitors instantly before loading the main site. This saves bandwidth and loads immediately.
- **Fast Server Responses**: The API endpoints run on Vercel's Edge functions to ensure server responses are extremely fast.

### Mobile & Performance Tuning
- We customized the touch feedback so buttons respond immediately when tapped on mobile.
- We optimized gesture controls in animated areas so the page scrolls smoothly even on older phones.
- We turned off basic CSS transitions on elements that are already running continuous animations to prevent lag.

---

## Folder Structure

The project uses a standard, easy-to-scale React layout:

- `api/` - Vercel Serverless Edge endpoints.
- `src/assets/` - Logo files and icons.
- `src/components/` - Global components (SEO, Navbar, Footer, Smooth Scroll, and Theme Toggle).
- `src/config/` - Project settings and environment configurations.
- `src/context/` - Global React context (manages transition animations).
- `src/data/` - Static mock databases.
- `src/pages/` - Different page views (Home, About, Contact, Blog List, Blog Post, Login, and Signup).
- `src/styles/` - Global styles and light/dark theme settings.

---

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/aaravdb10/my-blog2.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

---

<br />
<div align="center">
  <h1>Thanks for reading till here!</h1>
  <p>Your interest and time are highly appreciated.</p>
</div>
<br />


