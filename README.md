# 📝 The Blog 2026

A modern, high-performance, and beautifully designed blog platform built with **Next.js 16-19** and **React 19 Server Components**. This project serves as a comprehensive practice ground for exploring the latest web development patterns, focusing on **Server Actions**, **React Cache**, and the **Repository Pattern**.

---

## 🚀 Key Features

-   **⚡ High-Performance Rendering**: Fully SSR-powered with intelligent caching and revalidation logic.
-   **🛠️ Clean Architecture**: Implements the **Repository Pattern** to separate business logic from data access (Drizzle ORM).
-   **🔐 Robust Admin Dashboard**: A premium, icon-rich management interface to create, list, and delete posts.
-   **🖋️ Modern Authoring**: Full support for server-side post creation with Zod-validated server actions.
-   **🎨 Premium UI**: Crafted with **Tailwind CSS 4**, featuring smooth transitions, Geist typography, and Lucide icons.
-   **💾 Type-Safe Persistence**: Powered by **Drizzle ORM** and **LibSQL/SQLite** for reliable, type-safe database interactions.

---

## 🏗️ Technical Stack

-   **Framework**: [Next.js](https://nextjs.org/) (App Router)
-   **Frontend**: [React 19](https://react.dev/), [Tailwind CSS 4](https://tailwindcss.com/)
-   **Database/ORM**: [Drizzle ORM](https://orm.drizzle.team/), [LibSQL](https://github.com/tursodatabase/libsql) (SQLite)
-   **Validation**: [Zod](https://zod.dev/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Typography**: [Geist Font Family](https://vercel.com/font)

---

## 🔧 Core Concepts Explored

### 1. **Repository Pattern**
To ensure maintainability, the project uses a strict separation between the database schema and the application logic. See `src/repositories/post/` for the interface and its Drizzle implementation.

### 2. **Per-Request Caching**
Utilizes React's `cache()` to memoize database calls within the same request lifecycle, ensuring that duplicate queries (common in complex page hierarchies) are only executed once.

### 3. **Server Actions**
All state mutations (creating or deleting posts) are handled via Next.js Server Actions, providing a seamless "zero-JS" experience on the client while maintaining full type safety.

### 4. **Dynamic Routing & SEO**
Optimized for search engines with dynamic route metadata and clean URL structures (`/post/[slug]`).

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Database Setup
Set up your environment variables for Drizzle and run the migrations:
```bash
# Push your schema to LibSQL
npx drizzle-kit push
```

### 3. Seed Data
```bash
npm run db:seed
```

### 4. Run Development Server
```bash
npm run dev
```

---

## 📁 Project Structure

```text
src/
├── app/             # Next.js App Router (Routes & Server Actions)
├── components/     # Reusable React components (UI & Layout)
├── db/              # Drizzle schema and connection setup
├── lib/             # Core utilities and shared logic
├── models/          # Type definitions and interfaces
└── repositories/    # Repository Pattern implementation
```

---

## 🎓 About
This is a personal project used to explore the cutting edge of the **Next.js ecosystem**, specifically focusing on how to build scalable, maintainable, and visually stunning applications while mastering the transition to **React 19**.

Created with ❤️ by Guerlak.
