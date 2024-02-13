"use client";

import { useSelector, useDispatch } from "react-redux";
import {
  incrementProduct,
  decrementProduct,
  deletedProduct,
} from "@/redux/productSlice";

function BasketList() {
  const dispatch = useDispatch();
  const { allProduct, price } = useSelector((store) => store.product);
  return (
    <div>
      <h2 className="text-center mt-[10px] text-2xl">Jami: ${price}</h2>
      <ul>
        {allProduct &&
          allProduct.map((doc) => {
            return (
              <li key={doc.id}>
                <div className="py-[30px]">
                  <div className="card lg:card-side bg-base-100 shadow-2xl p-[20px]">
                    <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
                      <div className="carousel-item">
                        {doc.images.map((f) => {
                          return (
                            <img
                              key={f}
                              src={f}
                              className="rounded-box w-[300px] object-cover"
                            />
                          );
                        })}
                      </div>
                    </div>
                    <div className="card-body">
                      <h2 className="card-title">{doc.title}</h2>
                      <p>{doc.description}</p>
                      <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
                        <div className="flex flex-col gap-2 ">
                          <div className="flex flex-row gap-1 items-center">
                            <h2>Brend:</h2>
                            <div className="badge badge-outline">
                              {doc.brand}
                            </div>
                          </div>

                          <div className="flex flex-row gap-1 items-center">
                            <h2>Category:</h2>
                            <div className="badge badge-outline">
                              {doc.category}
                            </div>
                          </div>

                          <div className="flex flex-row gap-1 items-center">
                            <span>Narxi:</span>
                            <div className="badge badge-outline ">
                              ${doc.price}
                            </div>
                          </div>
                        </div>

                        <div className="stats stats-vertical lg:stats-horizontal shadow">
                          <div className="stat">
                            <div className="stat-title">Rating</div>
                            <div className="stat-value">{doc.rating}</div>
                          </div>

                          <div className="stat">
                            <div className="stat-title">Stock</div>
                            <div className="stat-value">{doc.stock}</div>
                          </div>

                          <div className="stat">
                            <div className="stat-title">Discount</div>
                            <div className="stat-value">
                              {doc.discountPercentage}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card-actions justify-end">
                        <h2 className="text-2xl">Maxsulot soni:</h2>
                        <button
                          onClick={() => {
                            if (doc.amount <= 1) {
                              dispatch(deletedProduct(doc.id));
                            } else {
                              dispatch(decrementProduct(doc.id));
                            }
                          }}
                          className="btn btn-secondary btn-outline"
                        >
                          -
                        </button>
                        <h2 className="text-2xl">{doc.amount}</h2>
                        <button
                          onClick={() => dispatch(incrementProduct(doc.id))}
                          className="btn btn-secondary btn-outline"
                        >
                          +
                        </button>
                        <button
                          className="btn btn-outline bnt-dark"
                          onClick={() => dispatch(deletedProduct(doc.id))}
                        >
                          Delete
                        </button>
                      </div>
                      <div className="card-actions justify-end"></div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default BasketList;
