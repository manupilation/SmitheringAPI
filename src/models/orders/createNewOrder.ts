// Homenagem ao meu querido Zhong Li "I will have ORDER"
import prismaClient from '../prisma';

const handleCreateOrder = async (orderItems: number[], userId: number) => {
  await prismaClient.$transaction(async (transaction) => {
    const { id: orderId } = await transaction.order.create({
      data: { userId },
    });

    await Promise.all(orderItems.map((id) => transaction.product.update({
      where: { id },
      data: { orderId },
    })));
  });
  return { code: 201, data: { order: { userId, orderItems } } };
};

export default handleCreateOrder;
