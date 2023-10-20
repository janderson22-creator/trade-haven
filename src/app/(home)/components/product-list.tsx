import ProductItem from "@/components/ui/product-item";
import computeProductTotalPrice from "@/helpers/product";
import { Product } from "@prisma/client";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="px-5:hidden flex w-full gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <div key={product.id} className="min-w-[170px] max-w-[170px]">
          <ProductItem product={computeProductTotalPrice(product)} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
