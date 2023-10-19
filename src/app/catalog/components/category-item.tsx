import { Category } from "@prisma/client";
import Image from "next/image";

interface CategoryItemsProps {
  category: Category;
}

const CategoryItem: React.FC<CategoryItemsProps> = ({ category }) => {
  return (
    <div className="flex flex-col">
      <div className="bg-category-item-gradient flex h-[150px] w-full items-center justify-center rounded-t-lg">
        {/* IMAGE */}
        <Image
          alt={category.name}
          src={category.imageUrl}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[80%] w-auto max-w-[80%] object-contain"
        />
      </div>

      <div className="rounded-b-lg bg-accent py-3">
        <p className="text-center text-sm font-semibold">{category.name}</p>
      </div>
    </div>
  );
};

export default CategoryItem;
