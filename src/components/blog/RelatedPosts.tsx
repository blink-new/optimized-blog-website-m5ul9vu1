import { BlogPost } from '@/types/blog'
import { BlogCard } from './BlogCard'

interface RelatedPostsProps {
  currentPost: BlogPost
  allPosts: BlogPost[]
}

export function RelatedPosts({ currentPost, allPosts }: RelatedPostsProps) {
  // Simple algorithm to find related posts based on categories and tags
  const getRelatedPosts = () => {
    const related = allPosts
      .filter(post => post.id !== currentPost.id)
      .map(post => {
        let score = 0
        
        // Score based on shared categories
        const sharedCategories = post.category === currentPost.category ? 2 : 0
        score += sharedCategories
        
        // Score based on shared tags
        const sharedTags = post.tags.filter(tag => 
          currentPost.tags.includes(tag)
        ).length
        score += sharedTags
        
        // Score based on same author
        const sameAuthor = post.author.name === currentPost.author.name ? 1 : 0
        score += sameAuthor
        
        return { post, score }
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map(item => item.post)
    
    // If no related posts found, return recent posts
    if (related.length === 0) {
      return allPosts
        .filter(post => post.id !== currentPost.id)
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
        .slice(0, 3)
    }
    
    return related
  }

  const relatedPosts = getRelatedPosts()

  if (relatedPosts.length === 0) return null

  return (
    <section className="mt-16 pt-16 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
          Related Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}