import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { schema } from "@/db/schema";

// Use an explicit Neon HTTP client so we can configure options and enable logging
const neonClient = neon(process.env.DATABASE_URL!);

export const db = drizzle(neonClient, { schema, logger: true });
