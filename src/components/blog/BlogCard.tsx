import { Calendar, Clock, User } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';
import { LazyImage } from '../ui/LazyImage';
import { BlogPost } from '../../types/blog';

interface BlogCardProps {
  post: BlogPost;
  onClick: (post: BlogPost) => void;
}

export function BlogCard({ post, onClick }: BlogCardProps) {
  return (
    <Card 
      className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      onClick={() => onClick(post)}
    >
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <LazyImage
            src={post.image}
            alt={post.title}
            className="w-full h-48 transition-transform duration-300 group-hover:scale-105"
          />
          {post.featured && (
            <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
              Featured
            </Badge>
          )}
          <Badge 
            variant="secondary" 
            className="absolute top-3 right-3 bg-background/90 text-foreground"
          >
            {post.category}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="px-6 pb-6 pt-0">
        <div className="flex items-center justify-between w-full text-xs text-muted-foreground">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <User className="h-3 w-3" />
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span>{post.readingTime} min read</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="h-3 w-3" />
            <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}