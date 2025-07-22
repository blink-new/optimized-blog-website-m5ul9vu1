import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { BlogPost } from '../../types/blog';

interface FeaturedPostProps {
  post: BlogPost;
  onClick: (post: BlogPost) => void;
}

export function FeaturedPost({ post, onClick }: FeaturedPostProps) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
        {/* Content */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="space-y-2">
            <Badge className="w-fit bg-accent text-accent-foreground">
              Featured Post
            </Badge>
            <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
              {post.title}
            </h1>
          </div>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>
          
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>{post.readingTime} min read</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
          
          <Button 
            onClick={() => onClick(post)}
            className="w-fit group"
            size="lg"
          >
            Read Full Article
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        
        {/* Image */}
        <div className="relative">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 lg:h-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
        </div>
      </div>
    </div>
  );
}