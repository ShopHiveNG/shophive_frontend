import ProductImage from "../../../assets/home/girl_with_headset.webp";

interface ProductsProps {
  name: string;
  specification: string;
  image: string;
  price: number;
}

export default function Products() {
  const productsLists: ProductsProps[] = [
    {
      name: "Apple iPhone 14 Pro Max",
      specification: "128GB Deep Purple ",
      image: ProductImage,
      price: 900,
    },
    {
      name: "Blackmagic Pocket",
      specification: "Cinema Camera 6k",
      image: ProductImage,
      price: 2535,
    },
    {
      name: "Apple Watch Series 9 GPS",
      specification: "41mm Starlight Aluminium",
      image: ProductImage,
      price: 399,
    },
    {
      name: "AirPods Max Silver",
      specification: "Starlight Aluminium",
      image: ProductImage,
      price: 549,
    },
    {
      name: "Galaxy Buds FE",
      specification: "Graphite",
      image: ProductImage,
      price: 2535,
    },
    {
      name: "Apple iPad 9 10.2",
      specification: " 64GB Wi-Fi Silver (MK2L3) 2021",
      image: ProductImage,
      price: 2535,
    },
  ];

  return (
    <div aria-label="Products" className="space-y-6 px-4">
      <p className="font-bold underline underline-offset-4">New Arrivals</p>

      <div className="2xs:grid-cols-2 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {productsLists.map(({ name, specification, image, price }) => (
          <div
            key={name}
            className="flex h-full flex-col justify-between gap-4 rounded-md bg-gray-100 px-4 py-6 transition-all hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="flex flex-col items-center space-y-4 text-center text-gray-900">
              <div className="size-40">
                <img
                  src={image}
                  alt={name}
                  className="size-full object-cover"
                />
              </div>
              <div>
                <h3>{name}</h3>
                <p>{specification}</p>
              </div>
            </div>

            <div className="space-y-4 text-center">
              <p className="text-2xl font-bold">${price}</p>
              <button className="w-full rounded-md bg-black py-3 text-white">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
