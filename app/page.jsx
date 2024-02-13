import ProductLists from "./components/ProductLists";

async function getData() {
  const req = await fetch("https://dummyjson.com/products");
  const data = await req.json();
  return data;
}

export default async function Home() {
  const data = await getData();
  return (
    <main>
      <ProductLists data={data} />
    </main>
  );
}
