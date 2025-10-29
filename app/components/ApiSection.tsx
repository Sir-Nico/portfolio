export const ApiSection = async () => {
  const fetchAPI = async () => {
    const res = await fetch("http://10.24.46.232/items", {
      method: "GET",
    });
    const data = await res.json();
    return data;
  };

  const items = (await fetchAPI()).items || [];

  return (
    <div className="flex flex-col items-center">
      <span className="text-2xl font-bold p-5">Bårnes api (ble bomba)</span>
      <div className="grid grid-cols-17">
        {items.map((item: { id: number; name: string; price: number }) => (
          <div key={item.id} className="border p-4 m-2">
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-foreground/80">${item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
