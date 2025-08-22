# Overview

A professional portfolio website for Baxish Patel, a Quality Assurance Specialist and Full Stack Developer. The application showcases his 9+ years of experience in software testing, automation, and full-stack development through an interactive, modern web interface built with React and TypeScript.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client-side is built using React 18 with TypeScript, leveraging a component-based architecture. The application uses Vite as the build tool for fast development and optimized production builds. The UI is constructed with shadcn/ui components built on top of Radix UI primitives, providing accessible and customizable interface elements.

**Routing**: Implemented using Wouter for lightweight client-side routing
**State Management**: TanStack Query (React Query) handles server state and data fetching
**Styling**: Tailwind CSS with CSS custom properties for theming and responsive design
**Component Library**: shadcn/ui with Radix UI primitives for consistent, accessible components

## Backend Architecture
The server is built with Express.js and TypeScript, following a modular structure. The application uses an in-memory storage implementation with an interface-based design that allows for easy migration to database persistence.

**Server Framework**: Express.js with TypeScript for type safety
**Storage Layer**: Abstracted storage interface with current in-memory implementation
**API Design**: RESTful API structure with centralized route registration
**Development Environment**: Vite integration for hot module replacement and development server

## Data Storage
Currently implements an in-memory storage system using JavaScript Maps. The storage interface is designed to support future migration to PostgreSQL using Drizzle ORM, with schema definitions already in place.

**Current Storage**: In-memory storage with Map-based user management
**Future Database**: PostgreSQL with Drizzle ORM (schema defined, migrations configured)
**Schema Management**: Drizzle Kit for database migrations and schema management

## Design System
The application implements a comprehensive design system using Tailwind CSS with custom CSS variables for theming. The design follows modern web standards with support for responsive layouts and accessibility.

**Theme System**: CSS custom properties for consistent color schemes and spacing
**Typography**: Inter font family with multiple weights
**Component Variants**: Class variance authority for consistent component styling
**Responsive Design**: Mobile-first approach with breakpoint-based layouts

## Build and Development
The project uses a modern build pipeline with separate client and server builds. Development environment includes hot module replacement, error overlays, and TypeScript checking.

**Build Tool**: Vite for client-side bundling and development
**Server Build**: esbuild for server-side bundling
**Development**: Integrated development server with HMR and error handling
**Type Checking**: TypeScript with strict configuration across client and server

# External Dependencies

## UI and Component Libraries
- **Radix UI**: Comprehensive set of accessible, unstyled React components
- **shadcn/ui**: Pre-built component library based on Radix UI
- **Lucide React**: Icon library for consistent iconography
- **class-variance-authority**: Utility for creating component variants
- **clsx & tailwind-merge**: Utility libraries for conditional CSS classes

## Data Management
- **TanStack React Query**: Server state management and data fetching
- **React Hook Form**: Form state management and validation
- **Zod**: Schema validation and type inference
- **Drizzle ORM**: Database ORM with TypeScript support
- **Drizzle Zod**: Integration between Drizzle and Zod for schema validation

## Database and Storage
- **Neon Database**: Serverless PostgreSQL database platform
- **connect-pg-simple**: PostgreSQL session store for Express

## Development and Build Tools
- **Vite**: Build tool and development server
- **esbuild**: Fast JavaScript bundler for server builds
- **TypeScript**: Static type checking
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing with Autoprefixer

## Utilities and Helpers
- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation
- **wouter**: Lightweight routing library
- **embla-carousel-react**: Carousel component for showcasing content