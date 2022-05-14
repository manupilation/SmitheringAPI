import prismaClient from '../prisma';

const handleFindAllOrders = async () => {
  const findAll = await prismaClient.order.findMany({
    take: 5,
    include: {
      products: { select: { id: true } },
    },
  });

  return findAll;
};

export default handleFindAllOrders;