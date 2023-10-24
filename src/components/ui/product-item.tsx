import { ProductWithTotalPrice } from "@/helpers/product";
import Image from "next/image";
import Link from "next/link";
import DiscountBadge from "./discount-badge";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <Link href={`/product/${product.slug}`}>
      <div className="flex flex-col gap-4">
        <div className="relative flex h-[170px] w-full items-center justify-center rounded-lg bg-accent">
          <Image
            src={product.imageUrls[0]}
            alt={product.name}
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto max-h-[80%] w-auto max-w-[80%] object-contain"
          />
          {product.discountPercentage > 0 && (
            <DiscountBadge className="absolute left-3 top-3">
              {product.discountPercentage}
            </DiscountBadge>
          )}
        </div>

        <div>
          <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm">
            {product.name}
          </p>

          {product.discountPercentage > 0 ? (
            <div className="flex items-center justify-center gap-2">
              <p className="font-semibold">
                R$ {product.totalPrice.toFixed(2)}
              </p>
              <p className="text-xs line-through opacity-75">
                R$ {Number(product.basePrice.toFixed(2))}
              </p>
            </div>
          ) : (
            <p className="font-semibold">
              R$ {Number(product.basePrice.toFixed(2))}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
