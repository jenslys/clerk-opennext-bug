import type { Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import "./globals.css";

export const metadata: Metadata = {
  title: "Clerk OpenNext Bug Replication",
  description: "Testing Clerk integration with OpenNext",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <html lang="en">
        <body>
          <header className="fixed top-0 left-0 w-full bg-purple-800 p-4 flex justify-between items-center">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="bg-white text-purple-800 px-4 py-2 rounded-lg hover:bg-purple-100 transition-colors">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
