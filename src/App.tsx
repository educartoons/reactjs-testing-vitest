import ProductPreview from "./components/Product/Product";

const product = {
  title: "Nike Air Force 1 '07",
  price: 115,
  image:
    "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-mens-shoes-jBrhbr.png",
  colors: 4,
};

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <ProductPreview product={product} />
    </div>
  );
}
