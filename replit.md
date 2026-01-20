# State & Liberty x Clayton Cuteri - Interactive Pitch Deck

## Overview

This is a professional interactive pitch deck web application designed for a high-stakes sponsorship proposal between State & Liberty (performance apparel brand) and Clayton Cuteri (political influencer). The application presents a multi-slide presentation with both slideshow and grid viewing modes, featuring animated statistics, PDF export capabilities, and fullscreen presentation mode. The target audience is corporate decision-makers evaluating a $50K+ partnership opportunity.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (@tanstack/react-query) for server state, React hooks for local state
- **Animation**: Framer Motion for slide transitions and animated number counters
- **Styling**: Tailwind CSS with custom design tokens (navy, crimson color palette) defined in CSS variables

### Component Structure
- **Slide Components**: Individual slide components in `client/src/components/pitch-deck/slides/` following naming convention `SlideXX_Name.tsx`
- **Shared Components**: Reusable presentation components (StatBox, TierCard, AnimatedNumber, SlideLayout, Navigation) in `client/src/components/pitch-deck/`
- **UI Library**: Shadcn/ui components (New York style) in `client/src/components/ui/` for dialogs, buttons, tooltips, and other interface elements

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Build Process**: Custom build script using esbuild for server bundling and Vite for client
- **Development**: tsx for TypeScript execution, Vite dev server with HMR
- **Static Serving**: Express serves built client assets in production

### Data Storage
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Location**: `shared/schema.ts` contains database table definitions
- **Current Usage**: Basic user schema exists but pitch deck is primarily static content
- **Storage Interface**: Abstracted storage layer in `server/storage.ts` with in-memory fallback

### Key Features
- **Dual View Modes**: Slideshow navigation with keyboard controls (← → Space) and scrollable grid view
- **PDF Export**: Client-side PDF generation using html2canvas and jsPDF
- **Fullscreen Mode**: Browser fullscreen API integration
- **Responsive Design**: Adapts from 1920x1080 presentation ratio to mobile screens
- **Animated Statistics**: Count-up animations triggered on scroll/slide visibility

## External Dependencies

### Frontend Libraries
- **framer-motion**: Slide animations and transitions
- **html2canvas + jspdf**: PDF export functionality
- **@radix-ui/***: Accessible UI primitives for shadcn components
- **embla-carousel-react**: Carousel functionality
- **react-day-picker**: Date picker component
- **recharts**: Chart visualization (via shadcn chart component)

### Backend Libraries
- **drizzle-orm + drizzle-kit**: Database ORM and migrations
- **pg + connect-pg-simple**: PostgreSQL driver and session storage
- **express-session**: Session management

### Development Tools
- **Vite plugins**: @replit/vite-plugin-runtime-error-modal, cartographer, dev-banner for Replit integration
- **TypeScript**: Strict mode enabled with path aliases (@/, @shared/, @assets/)

### Database
- PostgreSQL (requires DATABASE_URL environment variable)
- Drizzle Kit for schema migrations (`npm run db:push`)

### Asset Storage
- Static assets in `attached_assets/` directory
- Images referenced via Vite path aliases