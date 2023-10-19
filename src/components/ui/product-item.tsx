import { ProductWithTotalPrice } from "@/helpers/product";
import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDownIcon } from "lucide-react";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div className="flex max-w-[170px] flex-col gap-4">
      <div className="relative flex h-[170px] w-[170px] items-center justify-center rounded-lg bg-accent">
        <Image
          src={product.imageUrls[0]}
          alt={product.name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[80%] w-auto max-w-[80%] object-contain"
        />
        {product.discountPercentage > 0 && (
          <Badge className="absolute left-3 top-3 px-2 py-[2px]">
            <ArrowDownIcon size={14} /> {product.discountPercentage}%
          </Badge>
        )}
      </div>

      <div>
        <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm">
          {product.name}
        </p>

        {product.discountPercentage > 0 ? (
          <div className="flex items-center justify-center gap-2">
            <p className="font-semibold">R$ {product.totalPrice.toFixed(2)}</p>
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
  );
};

export default ProductItem;
