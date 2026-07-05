const createOrderError = (message, statusCode = 400) => {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
};

export const buildOrderProductsFromInventory = (cart, productsInDb) => {
  if (!Array.isArray(cart) || cart.length === 0) {
    throw createOrderError("cart is empty");
  }

  const quantityByProductId = new Map();
  for (const item of cart) {
    const productId = String(item?._id || "");
    const quantity = Number(item?.quantity || 0);

    if (!productId || !Number.isInteger(quantity) || quantity <= 0) {
      throw createOrderError("Invalid cart items");
    }

    quantityByProductId.set(productId, (quantityByProductId.get(productId) || 0) + quantity);
  }

  const productMap = new Map(productsInDb.map((product) => [String(product._id), product]));

  if (productsInDb.length !== quantityByProductId.size) {
    throw createOrderError("One or more products are invalid");
  }

  const products = [];
  for (const [productId, quantity] of quantityByProductId.entries()) {
    const product = productMap.get(productId);
    if (!product || product.isActive === false) {
      throw createOrderError("One or more products are invalid");
    }

    if (quantity > Number(product.stock || 0)) {
      throw createOrderError(`Insufficient stock for ${product.name || productId}`, 409);
    }

    products.push({
      product: product._id,
      quantity,
      price: product.price,
    });
  }

  const totalAmount = products.reduce(
    (sum, item) => sum + Number(item.price || 0) * Number(item.quantity || 0),
    0
  );

  if (totalAmount <= 0) {
    throw createOrderError("Invalid order amount");
  }

  return { products, totalAmount };
};

export const decrementStockWithRollback = async (ProductModel, products) => {
  const stockUpdates = [];

  for (const item of products) {
    const updateResult = await ProductModel.updateOne(
      { _id: item.product, stock: { $gte: item.quantity } },
      { $inc: { stock: -item.quantity } }
    );

    if (updateResult.modifiedCount !== 1) {
      for (const rollbackItem of stockUpdates) {
        await ProductModel.updateOne(
          { _id: rollbackItem.product },
          { $inc: { stock: rollbackItem.quantity } }
        );
      }

      throw createOrderError(`Insufficient stock for product ${String(item.product)}`, 409);
    }

    stockUpdates.push(item);
  }

  return stockUpdates;
};

export const rollbackStockUpdates = async (ProductModel, stockUpdates) => {
  for (const rollbackItem of stockUpdates) {
    await ProductModel.updateOne(
      { _id: rollbackItem.product },
      { $inc: { stock: rollbackItem.quantity } }
    );
  }
};
