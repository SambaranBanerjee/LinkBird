"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { DashboardBackground } from "@/components/ui/dashboard-background";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch("/api/auth/signin/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      
      if (response.ok) {
        router.push("/dashboard");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Blurred Dashboard Background */}
      <div className="absolute inset-0">
        <DashboardBackground />
      </div>
      <div className="absolute inset-0 bg-background/80 backdrop-blur-lg"></div>
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <Card className="border-0 shadow-xl backdrop-blur-sm bg-white/95">
            <CardHeader className="space-y-1 pb-4">
              <div className="flex flex-col items-start mb-2">
                <Button
                  variant="ghost"
                  className="mb-4 pt-4"
                  onClick={() => router.back()}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button> 
              </div>

              <div className="flex flex-col items-center w-full">
                <CardTitle className="text-2xl">Login with email</CardTitle>
                <CardDescription className="text-sm font-light text-gray-500">
                  Login using your Email address.
                </CardDescription>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-3">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email or Username
                  </label>
                  <Input
                    id="email"
                    placeholder="Enter your email or username"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border-0 shadow-sm focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div className="space-y-3">
                  <label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <Input
                    id="password"
                    placeholder="Enter your password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="border-0 shadow-sm focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full h-11 text-base bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                  disabled={isLoading}
                >
                  {isLoading ? "Logging in..." : "Login"}
                </Button>
              </form>
              
              <div className="text-center pt-4">
                <Link
                  href="/forgot-password"
                  className="text-sm text-gray-600 px-4 py-2 hover:text-blue-600 transition-colors"
                >
                  Forgot Password
                </Link>

                <Link 
                  href="/register" 
                  className="text-sm text-gray-600 px-4 py-2 hover:text-blue-600 transition-colors"
                >
                  Create New Account
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}