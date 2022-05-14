import handleCreateOrderModel from '../../models/orders/createNewOrder';

const handleCreateOrder = async (orderItems: number[], userId: string) => {
  const id = parseInt(userId, 10);

  const createOrder = await handleCreateOrderModel(orderItems, id);

  return createOrder;
};

export default handleCreateOrder;