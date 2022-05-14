import 'dotenv/config';
import { PrismaClient } from '@prisma/client';

const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD } = process.env;

const prismaClient = new PrismaClient({
  datasources: {
    db: {
      url: `mysql://${MYSQL_USER}:${MYSQL_PASSWORD}@${MYSQL_HOST}:3306/Trybesmith`,
    },
  },
});

export default prismaClient;