# Overview

This is a React-based psychological testing application designed to help users discover their personality traits through 12 different psychological tests. The application is built as a single-page application (SPA) with a modern tech stack including React, TypeScript, TailwindCSS, and shadcn/ui components.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: TailwindCSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library for consistent design
- **State Management**: React Context for theme management, TanStack Query for data fetching
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Server**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Authentication**: Session-based authentication using connect-pg-simple
- **API Design**: RESTful API with `/api` prefix for all backend routes

## Key Technologies
- **Node.js 20** runtime environment
- **ESM modules** for modern JavaScript module system
- **PostgreSQL 16** for data persistence
- **Neon Database** as the PostgreSQL provider

# Key Components

## Frontend Components
- **Theme System**: Dark/light mode toggle with persistent preferences
- **Responsive Design**: Mobile-first approach with TailwindCSS breakpoints
- **Test Engine**: Dynamic test rendering system with progress tracking
- **Result Calculation**: Score-based personality type classification
- **Social Sharing**: Native Web Share API with clipboard fallback

## Backend Components
- **Storage Interface**: Abstracted storage layer supporting both memory and database storage
- **User Management**: Basic user CRUD operations with username/password
- **Development Tools**: Hot module replacement with Vite middleware integration

## Data Structure
- **Test Configuration**: JSON-based test definitions with questions and scoring
- **User Schema**: Simple user table with id, username, and password fields
- **Result Types**: Four personality types per test with score ranges and descriptions

# Data Flow

1. **Test Discovery**: Users browse test cards on the home page
2. **Test Execution**: Users progress through start → questions → results phases
3. **Score Calculation**: Answers are summed and mapped to personality types
4. **Result Display**: Results include type name, description, and sharing options
5. **Data Persistence**: User answers are stored in memory (expandable to database)

# External Dependencies

## Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form
- **UI/UX**: Radix UI primitives, Lucide React icons, TailwindCSS
- **Routing**: Wouter for lightweight routing
- **Data Fetching**: TanStack React Query
- **Utilities**: date-fns, clsx, class-variance-authority

## Backend Dependencies
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Server**: Express.js, session management
- **Development**: tsx for TypeScript execution, esbuild for production builds

## Build Tools
- **Vite**: Development server and build tool
- **TypeScript**: Type checking and compilation
- **PostCSS**: CSS processing with TailwindCSS and Autoprefixer

# Deployment Strategy

## Development Environment
- **Runtime**: Node.js 20 with hot reload via tsx
- **Database**: PostgreSQL 16 with Drizzle migrations
- **Port Configuration**: Frontend on 5000, database connection via environment variables

## Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild compiles server code to `dist/index.js`
- **Database**: Production database URL via `DATABASE_URL` environment variable
- **Deployment**: Autoscale deployment target with npm run build/start scripts

## Static Deployment Option
The application is designed to work as a static site for Cloudflare Pages deployment:
- All test data is stored in JSON files
- No server-side dependencies for core functionality
- Client-side routing with wouter
- Local storage for test results and preferences

# Changelog

Changelog:
- June 16, 2025. Initial setup
- December 16, 2024. Enhanced result descriptions for better user engagement
- December 16, 2024. Added Privacy Policy and Terms of Service pages
- December 16, 2024. Improved dark mode toggle UI with background icons
- December 16, 2024. Streamlined footer navigation

# User Preferences

Preferred communication style: Simple, everyday language.