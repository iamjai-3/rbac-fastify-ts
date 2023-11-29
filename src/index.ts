import { env } from './config/env';
import { buildServer } from './utils/server';

const PORT = Number(process.env.PORT) || 3000;

async function gracefulShutdown({
  app
}: {
  app: Awaited<ReturnType<typeof buildServer>>;
}) {
  await app.close();
}

async function main() {
  const app = await buildServer();

  app.listen({ port: env.PORT, host: env.HOST });

  // await migrate(db, { migrationsFolder: './migrations' });

  const signals = ['SIGINT', 'SIGTERM'];

  for (const signal of signals) {
    process.on(signal, () => {
      gracefulShutdown({ app });
    });
  }
}

main();
