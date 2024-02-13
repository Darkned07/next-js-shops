import Link from "next/link";

function ProductLists({ data }) {
  const dt = data.products;
  return (
    <div className="py-[20px] ">
      <ul className="flex flex-wrap gap-5 align-center justify-center">
        {dt &&
          dt.map((d) => {
            return (
              <li className="card w-72 bg-base-100 shadow-xl ">
                <figure>
                  <Link href={`/product/${d.id}`}>
                    <img
                      className="h-[200px] object-cover"
                      src={d.thumbnail}
                      alt="Shoes"
                    />
                  </Link>
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {d.title}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>
                    {d.description.slice(1, 40)}...{" "}
                    <Link className="text-semibold" href={`/product/${d.id}`}>
                      Read More
                    </Link>
                  </p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">{d.category}</div>
                    <div className="badge badge-outline">{d.brand}</div>
                  </div>
                  <div className="mt-[10px] flex flex-row justify-between items-center">
                    <span>Narxi:</span>
                    <div className="badge badge-outline ">${d.price}</div>
                  </div>
                  <Link href={`/product/${d.id}`} className="btn btn-secondary mt-[10px]">
                    Add to card
                  </Link>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default ProductLists;
