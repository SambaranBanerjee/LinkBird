import Link from "next/link";

// src/app/test/page.tsx
export default function TestPage() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-600 mb-4">
            Next.js is working!
          </h1>
          <p className="text-muted-foreground">
            If you can see this, your basic setup is working correctly.
          </p>
          <div className="mt-8 space-x-4">
            <Link href="/" className="text-primary hover:underline">Home</Link>
            <Link href="/login" className="text-primary hover:underline">Login</Link>
            <Link href="/register" className="text-primary hover:underline">Register</Link>
          </div>
        </div>
      </div>
    );
  }