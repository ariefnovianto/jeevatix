import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

export function createDb(connectionString: string) {
  // Penggunaan postgres.js dengan opsi env edge (cocok untuk Cloudflare Workers/Hyperdrive)
  const client = postgres(connectionString, { prepare: false });
  return drizzle(client, { schema });
}

export * from './schema';