import handleFindOrderModel from '../../models/orders/findOrderById';

const handleFindOrder = async (id: number) => {
  const find = await handleFindOrderModel(id);

  if (!find) {
    const newError = new Error();
    newError.name = 'notFound';
    newError.message = 'Order not found';
    throw newError;
  }

  return find;
};

export default handleFindOrder;
