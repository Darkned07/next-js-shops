export function getDatas() {
  const get = async (id) => {
    const req = await fetch("https://dummyjson.com/products/" + id);
    const data = await req.json();
    return data;
  };

  return { get };
}
