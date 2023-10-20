import { CATEGORY_ICON } from "@/app/constants/category-icon";
import { Badge } from "@/components/ui/badge";
import { Category } from "@prisma/client";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {

  return (
    <div>
      <Badge
        variant="outline"
        className="flex items-center justify-center gap-2 rounded-lg py-3"
      >
        {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
        <span className="text-xs font-bold">{category.name}</span>
      </Badge>
    </div>
  );
};

export default CategoryItem;
