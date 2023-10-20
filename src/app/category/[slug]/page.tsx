import { CATEGORY_ICON } from "@/app/constants/category-icon";
import { Badge } from "@/components/ui/badge";
import ProductItem from "@/components/ui/product-item";
import computeProductTotalPrice from "@/helpers/product";
import { Product } from "@prisma/client";

const CategoryProducts = async ({ params }: any) => {
  const category = await PrismaClient.category.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      products: true,
    },
  });

  if (!category) {
    return null;
  }

  return (
    <div className="flex flex-col gap-8 p-5">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-1.5 text-base uppercase"
        variant="outline"
      >
        {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
        {category.name}
      </Badge>

      <div className="grid grid-cols-2 gap-8">
        {category.products.map((product: Product) => (
          <ProductItem
            key={product.id}
            product={computeProductTotalPrice(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
