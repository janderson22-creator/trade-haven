import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface CategoryItemsProps {
  category: Category;
}

const CategoryItem: React.FC<CategoryItemsProps> = ({ category }) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <div className="flex flex-col">
        <div className="flex h-[150px] w-full items-center justify-center rounded-t-lg bg-category-item-gradient">
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
    </Link>
  );
};

export default CategoryItem;
