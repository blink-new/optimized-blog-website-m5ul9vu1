import { Calendar, Clock, User, ArrowLeft } from 'lucide-react'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Separator } from '../ui/separator'
import { BlogPost as BlogPostType } from '../../types/blog'
import { ReadingProgress } from './ReadingProgress'
import { TableOfContents } from './TableOfContents'
import { SocialShare } from './SocialShare'
import { RelatedPosts } from './RelatedPosts'
import { CommentSection } from './CommentSection'
import { blogPosts } from '@/data/blogPosts'
import { useEffect } from 'react'

interface BlogPostProps {
  post: BlogPostType
  onBack: () => void
}

export function BlogPost({ post, onBack }: BlogPostProps) {
  const currentUrl = window.location.href

  // Add IDs to headings for table of contents
  useEffect(() => {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
    headings.forEach((heading) => {
      if (!heading.id) {
        const text = heading.textContent || ''
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
        heading.id = id
      }
    })
  }, [post.content])

  // Enhanced content processing for better rendering
  const processContent = (content: string) => {
    return content
      .split('\n\n')
      .map(paragraph => {
        // Handle headings
        if (paragraph.startsWith('#')) {
          const level = paragraph.match(/^#+/)?.[0].length || 1
          const text = paragraph.replace(/^#+\s*/, '')
          const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
          
          const sizeClasses = {
            1: 'text-3xl',
            2: 'text-2xl',
            3: 'text-xl',
            4: 'text-lg',
            5: 'text-base',
            6: 'text-sm'
          }
          
          return `<h${level} id="${id}" class="${sizeClasses[level as keyof typeof sizeClasses]} font-bold mt-8 mb-4 text-gray-900 dark:text-white">${text}</h${level}>`
        }
        
        // Handle regular paragraphs
        return `<p class="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">${paragraph}</p>`
      })
      .join('')
  }

  return (
    <>
      <ReadingProgress />
      <article className="max-w-4xl mx-auto relative">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-6 -ml-4 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
          
          <div className="space-y-4">
            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              {post.category}
            </Badge>
            
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="font-medium text-gray-900 dark:text-white">{post.author.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readingTime} min read</span>
                </div>
              </div>
              
              <SocialShare 
                title={post.title}
                url={currentUrl}
                description={post.excerpt}
              />
            </div>
          </div>
        </div>
        
        {/* Featured Image */}
        <div className="mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 lg:h-96 object-cover rounded-xl shadow-lg"
          />
        </div>
        
        {/* Table of Contents */}
        <TableOfContents content={post.content} />
        
        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div 
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
            dangerouslySetInnerHTML={{ 
              __html: processContent(post.content)
            }}
          />
        </div>
        
        <Separator className="my-12" />
        
        {/* Author Bio */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-start space-x-4">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                About {post.author.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {post.author.bio}
              </p>
            </div>
          </div>
        </div>
        
        {/* Tags */}
        <div className="mt-8">
          <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge 
                key={tag} 
                variant="outline"
                className="hover:bg-blue-50 hover:border-blue-200 dark:hover:bg-blue-900 dark:hover:border-blue-700 transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <RelatedPosts currentPost={post} allPosts={blogPosts} />

      {/* Comments */}
      <CommentSection postId={post.id} />
    </>
  )
}