import prismaClient from '.';
import dataSeedDb from './data';

const seedDb = async () => {
  await prismaClient.user.create({
    data: {
      username: 'default_admin',
      classe: 'god',
      level: 1000,
      password: 'whyAreYouRunning',
    },
  });

  await prismaClient.product.createMany({
    data: dataSeedDb,
  });
};

seedDb()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });
