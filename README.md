# Nextjs - MUI - Prisma - Clerk - Template

This is a Nextjs template with MUI, Prisma, and TypeScript.
Authentication is handled with [Clerk](https://clerk.com/).

## Getting Started

1. Clone the repository
   with http:
   ```bash
    git clone https://github.com/stefvannieuwenhove/nextjs-mui-prisma-clerk-template.git
   ```
   or ssh:
   ```bash
    git clone git@github.com:stefvannieuwenhove/nextjs-mui-prisma-clerk-template.git
   ```
2. Install dependencies
   ```bash
    npm install or yarn install
   ```
3. Create a .env file in the root directory and add the following variables:

   ```bash
    NODE_ENV=development
    DATABASE_URL=postgresql://postgres:example@localhost:5432/postgres
    CLERK_SECRET_KEY=your-secret-key
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-public-key
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/
    NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/
    NEXT_PUBLIC_CLERK_RESET_PASSWORD_URL=/reset-password
    NEXT_PUBLIC_CLERK_RESET_PASSWORD_FORCE_REDIRECT_URL=/
    NEXT_PUBLIC_CLERK_FORGOT_PASSWORD_URL=/forgot-password
    NEXT_PUBLIC_CLERK_FORGOT_PASSWORD_FORCE_REDIRECT_URL=/
   ```

4. Run the development server
   ```bash
    npm run dev or yarn dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- [Next.js](https://nextjs.org/)
- [MUI](https://mui.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [Clerk](https://clerk.com/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
