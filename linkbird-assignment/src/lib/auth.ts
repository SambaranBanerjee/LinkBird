/*import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db";
import { accounts, sessions, users } from "./schema";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      users,
      sessions,
      accounts,
    },
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },
});*/

// src/lib/auth.ts
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db";
import { accounts, sessions, users } from "./schema";

// For development, use a simple in-memory adapter if database is not available
let authConfig;

if (process.env.NODE_ENV === "development" && process.env.DATABASE_URL === "file:./dev.db") {
  // Use memory adapter for development
  authConfig = {
    database: {
      default: {
        type: "memory" as const,
      },
    },
    emailAndPassword: {
      enabled: true,
    },
  };
} else {
  // Use database adapter for production
  authConfig = {
    database: drizzleAdapter(db, {
      provider: "sqlite",
      schema: {
        users,
        sessions,
        accounts,
      },
    }),
    emailAndPassword: {
      enabled: true,
    },
    socialProviders: {
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      },
    },
  };
}

export const auth = betterAuth(authConfig);