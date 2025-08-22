# Overview

This is a professional portfolio website for Baxish Patel, a Quality Assurance Specialist with 9+ years of experience. The application is built as a full-stack web application showcasing QA expertise, professional experience, skills, and projects. It features a modern, responsive design with smooth animations and interactive components, including a contact form for potential employers or clients to reach out.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Shadcn/ui components built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with CSS variables for theming and responsive design
- **State Management**: TanStack Query (React Query) for server state management and API interactions
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js for the web server
- **Language**: TypeScript throughout the entire stack
- **API Design**: RESTful API with structured error handling and request logging
- **Validation**: Zod for runtime type validation on API endpoints
- **Development**: Hot module replacement via Vite middleware integration

## Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM
- **Schema Management**: Drizzle Kit for database migrations and schema generation
- **Connection**: Neon Database serverless PostgreSQL for cloud hosting
- **Fallback Storage**: In-memory storage implementation for development/testing

## Authentication and Authorization
- **Current State**: Basic user schema defined but no active authentication implemented
- **Architecture**: Prepared for session-based authentication with PostgreSQL session storage
- **User Model**: Includes username/password fields ready for future auth implementation

## Contact Form Processing
- **Endpoint**: `/api/contact` POST endpoint for form submissions
- **Validation**: Zod schema validation for name, email, subject, and message fields
- **Processing**: Currently logs submissions to console (ready for email service integration)
- **Error Handling**: Structured error responses with field-level validation feedback

## Development and Build Pipeline
- **Development**: Integrated Vite dev server with Express backend
- **Build Process**: Separate client and server builds using Vite and esbuild
- **Type Checking**: Strict TypeScript configuration across all code
- **Code Organization**: Monorepo structure with shared types and schemas

# External Dependencies

## UI and Component Libraries
- **Radix UI**: Comprehensive primitive components for accessibility and customization
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Utility for component variant management
- **Embla Carousel**: Carousel/slider functionality
- **React Hook Form**: Form state management and validation

## Database and ORM
- **Drizzle ORM**: TypeScript-first ORM for database operations
- **Neon Database**: Serverless PostgreSQL hosting platform
- **Drizzle Kit**: Database migration and schema management tools

## Development and Build Tools
- **Vite**: Frontend build tool and development server
- **esbuild**: Fast bundler for server-side code
- **TSX**: TypeScript execution for development
- **PostCSS**: CSS processing with Tailwind CSS integration

## Styling and Design
- **Tailwind CSS**: Utility-first CSS framework
- **Google Fonts**: Inter font family for typography
- **CSS Variables**: Dynamic theming system

## Utilities and Helpers
- **date-fns**: Date manipulation and formatting
- **clsx**: Conditional className utility
- **nanoid**: Unique ID generation
- **Zod**: Runtime type validation and schema definition

## Replit Integration
- **Development Tools**: Replit-specific plugins for error handling and development experience
- **Deployment**: Configured for Replit hosting environment