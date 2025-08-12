// import "dotenv/config";
// import { defineConfig } from "drizzle-kit";

// export default defineConfig({
//   out: "./drizzle",
//   schema: "./src/db/schema.ts",
//   dialect: "postgresql",
//   dbCredentials: {
//     url: process.env.DATABASE_URL!,
//   },
// });

import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts", // schema.ts ile aynı klasördeyse bu yeterli
  out: "./drizzle", // migration dosyalarının çıkacağı klasör
  dialect: "postgresql", // yeni sürümlerde driver yerine dialect
  dbCredentials: {
    url: process.env.DATABASE_URL!, // .env dosyasındaki bağlantı URL'si
  },
});
