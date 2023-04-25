import 'dotenv/config';
import { PrismaClient } from '@prisma/client';

const { DATABASE_URL } = process.env;

const prismaClient = new PrismaClient({
  datasources: {
    db: {
      url: DATABASE_URL,
    },
  },
});

export default prismaClient;