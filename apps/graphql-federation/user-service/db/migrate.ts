import 'dotenv/config';
import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';

import * as schema from './schema';

const connection = postgres({
  // db connection configuration
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT ?? 5432),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

  // other configuration
  max: 1,
});

const db = drizzle(connection, { schema });

migrate(db, { migrationsFolder: './drizzle' }).then(() => {
  connection.end();
});
