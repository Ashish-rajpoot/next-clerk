import {
  ClerkProvider,
  SignIn,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import Link from "next/link";
export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header className="flex justify-end px-5 items-center py-3 sticky top-0 backdrop-blur-xl border-b-2">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <div className="flex gap-3 text-[14px] justify-center items-center">
                <Link href={"/blog"}>Blogs</Link>
                <UserButton showName />
              </div>
            </SignedIn>
          </header>
          <main className="flex justify-center items-baseline min-h-screen">
            <SignedIn>{children}</SignedIn>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
