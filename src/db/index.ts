// import { drizzle } from "drizzle-orm/neon-http";

// export const db = drizzle(process.env.DATABASE_URL!);

import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool);
