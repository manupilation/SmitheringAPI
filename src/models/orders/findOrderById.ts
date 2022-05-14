import prismaClient from '../prisma';

const handleFindOrder = async (id: number) => {
  const find = await prismaClient.order.findFirst({
    where: {
      id,
    },
    include: {
      products: {
        select: { id: true },
      },
    },
  });

  return find;
};

export default handleFindOrder;
