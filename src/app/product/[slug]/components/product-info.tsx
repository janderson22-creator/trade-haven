"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductWithTotalPrice } from "@/helpers/product";
import {
  ArrowDown,
  ArrowLeftIcon,
  ArrowRightIcon,
  TruckIcon,
} from "lucide-react";
import { useState } from "react";

interface ProductInfoProps {
  product: Pick<
    ProductWithTotalPrice,
    "basePrice" | "description" | "discountPercentage" | "totalPrice" | "name"
  >;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const [amount, setAmount] = useState(1);
  return (
    <div className="flex flex-col px-5">
      <p className="text-lg">{product.name}</p>

      {product.discountPercentage > 0 && (
        <div className="flex items-center gap-1 text-sm opacity-75">
          <p>De: $ </p>
          <p className="line-through">
            {" "}
            {Number(product.basePrice).toFixed(2)}
          </p>
        </div>
      )}

      <div className="flex items-center gap-2">
        <p>Por:</p>
        <p className="text-xl font-bold">{product.totalPrice.toFixed(2)}</p>
        {product.discountPercentage > 0 && (
          <Badge className="px-2 py-[2px]">
            <ArrowDown size={14} /> {product.discountPercentage}%
          </Badge>
        )}
      </div>

      <div className="mt-4 flex items-center gap-2">
        <Button
          size="icon"
          variant="outline"
          onClick={() => setAmount(amount === 1 ? amount : amount - 1)}
        >
          <ArrowLeftIcon size={16} />
        </Button>

        <span>{amount}</span>

        <Button
          size="icon"
          variant="outline"
          onClick={() => setAmount(amount + 1)}
        >
          <ArrowRightIcon size={16} />
        </Button>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <p className="font-bold">Descrição</p>
        <p className="text-justify text-sm opacity-60">{product.description}</p>
      </div>

      <Button className="mt-8 font-bold uppercase">
        Adicionar ao carrinho
      </Button>

      <div className="flex items-center justify-between bg-accent px-5 py-2 mt-5 rounded-lg">
        <div className="flex items-center gap-3">
          <TruckIcon />

          <div className="flex flex-col">
              <p className="text-xs">Entrega via <span className="font-bold">FSPacket®</span></p>

              <p className="text-[#8162FF] text-xs">Envio para <span className="font-bold">todo Brasil</span></p>
          </div>
        </div>

        <p className="text-xs font-bold">Frete grátis</p>
      </div>
    </div>
  );
};

export default ProductInfo;
