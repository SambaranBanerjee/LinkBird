"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch("/api/auth/signup/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          name: `${firstName} ${lastName}`,
          email, 
          password 
        }),
      });
      
      if (response.ok) {
        router.push("/dashboard");
      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <Card className="border-0 shadow-lg">
          <Button
            variant="ghost"
            className="mb-4 pt-4"
            onClick={() => router.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button> 
          <CardHeader className="space-y-1 pb-4">
            <div className="flex items-center mb-2">
              <CardTitle className="text-2xl">Register with email</CardTitle>
            </div>
            <CardDescription className="text-sm font-light text-gray-500">
              Register using your Email address.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="border-0 shadow-sm focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    className="border-0 shadow-sm focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  type="email"
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
                  placeholder="Create a password"
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
                {isLoading ? "Creating account..." : "Create my account"}
              </Button>
            </form>
            
            <div className="text-center pt-4">
              <span className="text-sm text-gray-600">Already have an account? </span>
              <Link 
                href="/login" 
                className="text-sm text-gray-600 px-4 py-2"
              >
                Login
              </Link>
            </div>
          </CardContent>
        </Card>
        
        <div className="text-center text-xs text-gray-500">
          By continuing, you agree to our Privacy Policy and Terms of Service
        </div>
      </div>
    </div>
  );
}