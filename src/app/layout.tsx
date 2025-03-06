import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ClerkProvider } from '@clerk/nextjs';
import { CssBaseline } from '@mui/material';
import { ScreenSize } from '@/components/ui';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Aesthetic Supply',
  description:
    'Inventory system for various doctors focusing on plastic surgery',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='nl'>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <AppRouterCacheProvider>
            <CssBaseline />
            {children}
            <ScreenSize />
          </AppRouterCacheProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
