// src/app/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to login page after a brief delay
    const timer = setTimeout(() => {
      router.push('/login');
    }, 1000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Linkbird.ai</h1>
        <p className="text-muted-foreground">Redirecting to login...</p>
        <div className="mt-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </div>
    </div>
  );
}