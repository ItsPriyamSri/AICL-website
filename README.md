# AI Community Lucknow (AICL) — Official Web UI

[![Next.js](https://img.shields.io/badge/Next.js-16.3.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

> **Note**: This repository contains the complete source code for the official user interface (UI) and frontend application of **AI Community Lucknow (AICL)**, accessible live at [aicommunitylucknow.live](https://aicommunitylucknow.live).

---

## 🌐 About AI Community Lucknow

**AI Community Lucknow (AICL)** (formerly TensorFlow User Group Lucknow) is the premier artificial intelligence and machine learning community based in Lucknow, India ("The City of Nawabs").

AICL brings together developers, researchers, students, and industry practitioners to democratize access to cutting-edge AI knowledge, foster collaborative open-source development, and host real-world workshops and competitive hackathons.

### Community Pillars
- 🎓 **Hands-on Workshops & Tech Talks**: Monthly masterclasses covering deep learning, computer vision, natural language processing, LLMs, and ML systems.
- ⚡ **Hackathons & Coding Sprints**: High-impact hackathons (e.g., Lucknow AI Hackathon, Hack to Crack, Viveka) focused on real-world problem-solving.
- 🤝 **Mentorship & Ecosystem**: Connecting aspiring developers in Uttar Pradesh with industry veterans, academic mentors, and peer collaborators.

---

## ✨ Key UI & Architectural Features

This web application is built with a focus on high aesthetic fidelity, fluid micro-interactions, responsive design, and cultural heritage:

- **IntroLoader Sequence**: Custom SVG path-length drawing sequence illustrating the AICL neural archway and interconnected nodes, followed by staggered community typography entrance.
- **NeuralCanvas Firefly Constellation**: Interactive HTML5 Canvas particle system simulating glowing fireflies (`#C6FF3D`) with dynamic distance-based constellation networking and cursor magnetism.
- **Frosted Z-Depth Layering**: Multi-tier visual hierarchy where the hero subtitle floats on an elevated frosted glass pane (`backdrop-blur-[2.5px]`), allowing background fireflies to organically glide beneath the text while keeping typography crisp and legible.
- **Lucknow Jaali Pattern**: Bespoke SVG watermarks inspired by the traditional geometric Chikankari openwork architecture of Lucknow.
- **Custom Spring Cursor**: Fine-pointer custom cursor featuring a trailing glassmorphic ring and a neon center dot, with native OS cursor suppression.
- **Default Dark Theme with SSR Zero-FOUC**: Pre-hydrated theme scripts ensuring an instantaneous dark aesthetic without flashing unstyled content, with an integrated light/dark switcher via `next-themes`.
- **Self-Hosted Typography**:
  - **Clash Display** (Medium, Semibold, Bold) for display headings.
  - **Inter** for body copy.
  - **JetBrains Mono** for developer status pills, badges, and technical tags.

---

## 🧭 Routes & Pages

| Route | Page | Purpose |
| :--- | :--- | :--- |
| `/` | **Home** | Hero constellation, Core Pillars, broadcast news teaser, and join CTA. |
| `/about` | **About** | Mission & Vision, community pillars, and impact metrics (500+ members, 15+ events). |
| `/events` | **Events** | Event categories, upcoming status, and searchable archive of 13+ past sessions. |
| `/hackathons` | **Hackathons** | Past hackathons showcase (with winner GitHub repos), guidelines, and schedule. |
| `/team` | **Team** | Lead Organizer (Prashant Shukla), Core Leaders, and 18-member volunteer grid. |
| `/contact` | **Contact** | Interactive contact channels, copyable email, FAQ accordions, and message form. |
| `/api/contact` | **API Route** | Backend contact submission handler with honeypot spam protection and validation. |

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Core Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme Management**: [next-themes](https://github.com/pacocoursey/next-themes)

---

## 📁 Project Structure

```
AICL-website/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form POST endpoint
│   ├── about/                    # Mission, vision, and metrics
│   ├── contact/                  # Contact channels, map, and FAQs
│   ├── events/                   # Events directory and filter tabs
│   ├── fonts/                    # Self-hosted Clash Display .woff2 files
│   ├── hackathons/               # Past hackathons and guidelines
│   ├── team/                     # Team organizers and volunteer showcase
│   ├── globals.css               # Design tokens, themes, and base styles
│   ├── layout.tsx                # Root layout, theme provider, and fonts
│   ├── page.tsx                  # Landing page with hero and pillars
│   └── template.tsx              # Route transition wrapper
├── components/
│   ├── CustomCursor.tsx          # Interactive spring cursor follower
│   ├── Footer.tsx                # 3-column site footer
│   ├── GrainOverlay.tsx          # Procedural noise texture
│   ├── IntroLoader.tsx           # SVG animated entrance loader
│   ├── JaaliPattern.tsx          # Geometric Lucknow Chikan SVG watermark
│   ├── Navbar.tsx                # Sticky glass navbar with active indicators
│   ├── NeuralCanvas.tsx          # Firefly particle constellation engine
│   ├── ThemeProvider.tsx         # Next-themes wrapper
│   ├── ThemeToggle.tsx           # Dark/Light mode toggle switch
│   └── TiltCard.tsx              # 3D perspective mouse-tilt card
├── lib/
│   ├── eventsData.json           # Scraped historical events dataset
│   └── volunteersData.json       # Volunteer team dataset
├── public/
│   ├── brand/logo.png            # Official AICL logo
│   ├── fonts/                    # Public static font assets
│   └── team/                     # Authentic team and volunteer photos
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js `18.18+` or `20+`
- npm, pnpm, or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/ItsPriyamSri/AICL-website.git
   cd AICL-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) (or the port indicated in terminal) in your browser.

### Production Build
To create an optimized production build:
```bash
npm run build
npm run start
```

---

## 📬 Connect with AI Community Lucknow

- **Website**: [aicommunitylucknow.live](https://aicommunitylucknow.live)
- **LinkedIn**: [TensorFlow User Group Lucknow](https://www.linkedin.com/company/tensorflow-user-group-lucknow/)
- **X (Twitter)**: [@TFUGlucknow](https://x.com/TFUGlucknow)
- **Instagram**: [@aicommunitylucknow](https://www.instagram.com/aicommunitylucknow/)
- **Discord**: [AICL Discord Server](https://discord.com/channels/1165604190475792434/1165604190475792436)
- **Commudle**: [TFUG Lucknow Community](https://www.commudle.com/communities/tfug-lucknow)
- **WhatsApp**: [Join AICL WhatsApp Group](https://chat.whatsapp.com/IAM2fp4IoLiGbuI6ZeNfzH)
- **Email**: [aicommunitylucknow@gmail.com](mailto:aicommunitylucknow@gmail.com)

---

## 📄 License

This project is licensed under the MIT License.
