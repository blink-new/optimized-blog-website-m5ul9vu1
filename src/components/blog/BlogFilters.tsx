import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { categories } from '../../data/blogPosts';

interface BlogFiltersProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  searchQuery: string;
  onClearFilters: () => void;
}

export function BlogFilters({ 
  selectedCategory, 
  onCategoryChange, 
  searchQuery,
  onClearFilters 
}: BlogFiltersProps) {
  const hasActiveFilters = selectedCategory || searchQuery;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Filter by Category</h3>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={onClearFilters}>
            Clear Filters
          </Button>
        )}
      </div>
      
      <div className="flex flex-wrap gap-2">
        <Badge
          variant={selectedCategory === null ? "default" : "outline"}
          className="cursor-pointer transition-colors hover:bg-primary hover:text-primary-foreground"
          onClick={() => onCategoryChange(null)}
        >
          All Posts
        </Badge>
        
        {categories.map((category) => (
          <Badge
            key={category.id}
            variant={selectedCategory === category.slug ? "default" : "outline"}
            className="cursor-pointer transition-colors hover:bg-primary hover:text-primary-foreground"
            onClick={() => onCategoryChange(category.slug)}
          >
            {category.name} ({category.count})
          </Badge>
        ))}
      </div>
      
      {hasActiveFilters && (
        <div className="text-sm text-muted-foreground">
          {searchQuery && (
            <span>Searching for "{searchQuery}"</span>
          )}
          {searchQuery && selectedCategory && <span> • </span>}
          {selectedCategory && (
            <span>Category: {categories.find(c => c.slug === selectedCategory)?.name}</span>
          )}
        </div>
      )}
    </div>
  );
}