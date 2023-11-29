import type { Config } from 'drizzle-kit';
import { env } from './src/config/env';

export default {
  out: './migrations',
  schema: './src/db/schema.ts',
  driver: 'pg',
  dbCredentials: {
    connectionString: env.DATABASE_CONNECTION
  }
} satisfies Config;
