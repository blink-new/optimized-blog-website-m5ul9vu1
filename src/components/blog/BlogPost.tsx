import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { BlogPost as BlogPostType } from '../../types/blog';

interface BlogPostProps {
  post: BlogPostType;
  onBack: () => void;
}

export function BlogPost({ post, onBack }: BlogPostProps) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <article className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6 -ml-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Button>
        
        <div className="space-y-4">
          <Badge className="bg-accent text-accent-foreground">
            {post.category}
          </Badge>
          
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-8 h-8 rounded-full"
                />
                <span className="font-medium">{post.author.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{post.readingTime} min read</span>
              </div>
            </div>
            
            <Button variant="outline" size="sm" onClick={handleShare}>
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
      </div>
      
      {/* Featured Image */}
      <div className="mb-8">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 lg:h-96 object-cover rounded-xl"
        />
      </div>
      
      {/* Content */}
      <div className="prose prose-lg max-w-none">
        <div 
          className="text-foreground leading-relaxed"
          dangerouslySetInnerHTML={{ 
            __html: post.content.replace(/\n/g, '<br />').replace(/#{1,6}\s/g, match => {
              const level = match.trim().length;
              return `<h${level} class="text-${4-level}xl font-bold mt-8 mb-4">`;
            }).replace(/\n/g, '</h' + post.content.match(/#{1,6}/)?.[0].length + '>') 
          }}
        />
      </div>
      
      <Separator className="my-12" />
      
      {/* Author Bio */}
      <div className="bg-muted/50 rounded-xl p-6">
        <div className="flex items-start space-x-4">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-16 h-16 rounded-full"
          />
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-2">About {post.author.name}</h3>
            <p className="text-muted-foreground">{post.author.bio}</p>
          </div>
        </div>
      </div>
      
      {/* Tags */}
      <div className="mt-8">
        <h3 className="font-semibold mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  );
}