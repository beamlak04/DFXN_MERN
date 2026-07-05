import assert from "node:assert/strict";
import test from "node:test";

import {
  buildOrderProductsFromInventory,
  decrementStockWithRollback,
} from "../lib/orderSecurity.js";

test("order products use server prices and ignore client price tampering", () => {
  const { products, totalAmount } = buildOrderProductsFromInventory(
    [{ _id: "64a000000000000000000001", quantity: 2, price: 1 }],
    [{ _id: "64a000000000000000000001", name: "Runner", price: 750, stock: 5 }]
  );

  assert.equal(products[0].price, 750);
  assert.equal(totalAmount, 1500);
});

test("duplicate product lines are aggregated before stock validation", () => {
  assert.throws(
    () =>
      buildOrderProductsFromInventory(
        [
          { _id: "64a000000000000000000001", quantity: 3 },
          { _id: "64a000000000000000000001", quantity: 3 },
        ],
        [{ _id: "64a000000000000000000001", name: "Runner", price: 750, stock: 5 }]
      ),
    /Insufficient stock/
  );
});

test("stock decrement rolls back earlier products after a stock race", async () => {
  const calls = [];
  const ProductModel = {
    async updateOne(filter, update) {
      calls.push({ filter, update });
      if (filter._id === "second" && update.$inc.stock < 0) {
        return { modifiedCount: 0 };
      }
      return { modifiedCount: 1 };
    },
  };

  await assert.rejects(
    () =>
      decrementStockWithRollback(ProductModel, [
        { product: "first", quantity: 1 },
        { product: "second", quantity: 1 },
      ]),
    /Insufficient stock/
  );

  assert.deepEqual(calls, [
    { filter: { _id: "first", stock: { $gte: 1 } }, update: { $inc: { stock: -1 } } },
    { filter: { _id: "second", stock: { $gte: 1 } }, update: { $inc: { stock: -1 } } },
    { filter: { _id: "first" }, update: { $inc: { stock: 1 } } },
  ]);
});
