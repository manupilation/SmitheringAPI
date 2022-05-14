import handleFindAllOrdersModel from '../../models/orders/findAllOrders';

const handleFindAllOrders = async () => {
  const findAll = await handleFindAllOrdersModel();

  return findAll;
};

export default handleFindAllOrders;
