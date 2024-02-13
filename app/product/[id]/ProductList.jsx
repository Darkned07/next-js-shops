"use client";
import { useDispatch } from "react-redux";
import { addToCard } from "@/redux/productSlice";

function ProductList({ singlePro }) {
  const dispatch = useDispatch();
  return (
    <div className="py-[30px]">
      <div className="card lg:card-side bg-base-100 shadow-2xl p-[20px]">
        <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
          <div className="carousel-item">
            {singlePro.images.map((f) => {
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
          <h2 className="card-title">{singlePro.title}</h2>
          <p>{singlePro.description}</p>
          <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
            <div className="flex flex-col gap-2 ">
              <div className="flex flex-row gap-1 items-center">
                <h2>Brend:</h2>
                <div className="badge badge-outline">{singlePro.brand}</div>
              </div>

              <div className="flex flex-row gap-1 items-center">
                <h2>Category:</h2>
                <div className="badge badge-outline">{singlePro.category}</div>
              </div>

              <div className="flex flex-row gap-1 items-center">
                <span>Narxi:</span>
                <div className="badge badge-outline ">${singlePro.price}</div>
              </div>
            </div>

            <div className="stats stats-vertical lg:stats-horizontal shadow">
              <div className="stat">
                <div className="stat-title">Rating</div>
                <div className="stat-value">{singlePro.rating}</div>
              </div>

              <div className="stat">
                <div className="stat-title">Stock</div>
                <div className="stat-value">{singlePro.stock}</div>
              </div>

              <div className="stat">
                <div className="stat-title">Discount</div>
                <div className="stat-value">{singlePro.discountPercentage}</div>
              </div>
            </div>
          </div>

          <div className="card-actions justify-end">
            <button
              onClick={() => dispatch(addToCard({ ...singlePro, amount: 1 }))}
              className="btn btn-primary"
            >
              Add to card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
