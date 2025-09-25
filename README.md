# 🧞 Basic explanation to run this project

## Development Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally |
| `npm run astro ...` | Run Astro CLI commands like `astro add`, `astro check` |

## Project Architecture

This is an Astro-based website for Color Kids, a children's therapy and development center. The project uses:

- **Framework**: Astro v5 with server-side rendering
- **Styling**: Tailwind CSS v4 with custom global styles
- **Animation**: GSAP for animations and Lenis for smooth scrolling
- **Content**: Content Collections for blog posts and author profiles
- **Email**: Resend for contact form functionality
- **Deployment**: Netlify adapter configured

### Key Architecture Patterns

**Content Collections**: Blog posts and author profiles are managed through Astro's content collections system defined in `src/content.config.ts`. Blog posts are in `src/content/blog/` and authors in `src/content/author/`.

**Layout System**: 
- `MainLayout.astro` - Main page wrapper with navbar, footer, and dotted background pattern
- `BlogLayout.astro` - Specialized layout for blog posts
- `AuthorLayout.astro` - Layout for author profile pages

**Component Structure**:
- `src/components/shared/` - Reusable components (Navbar, Footer)
- `src/components/section/` - Page sections (Hero, Services, Blog, Contact)
- `src/components/ui/` - UI components including cards and forms
- `src/components/ui/cards/` - Various card components for different content types

**Server Actions**: Contact form handling is implemented using Astro actions in `src/actions/contact/getContact.ts` with Resend integration.

**Animations**: Custom animations are organized in `src/scripts/homePageAnimations/` with GSAP, and smooth scrolling is handled by Lenis.

### File Organization

- Blog posts use markdown with frontmatter in `src/content/blog/`
- Author profiles use YAML format in `src/content/author/`
- Static assets are in `src/assets/Images/` and `src/assets/fonts/`
- Page-specific scripts are in `src/scripts/`
- Global styles are in `src/styles/global.css`

### Server Configuration

The project is configured for server-side rendering with Netlify adapter. The development server runs on port 4321.