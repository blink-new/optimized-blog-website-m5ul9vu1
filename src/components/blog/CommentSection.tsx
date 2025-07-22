import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { MessageCircle, Heart, Reply } from 'lucide-react'

interface Comment {
  id: string
  author: {
    name: string
    avatar?: string
    email: string
  }
  content: string
  createdAt: string
  likes: number
  replies?: Comment[]
}

// Mock comments data
const mockComments: Comment[] = [
  {
    id: '1',
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
      email: 'sarah@example.com'
    },
    content: 'Great article! This really helped me understand the concepts better. Looking forward to more content like this.',
    createdAt: '2024-01-15T10:30:00Z',
    likes: 12,
    replies: [
      {
        id: '2',
        author: {
          name: 'Mike Chen',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
          email: 'mike@example.com'
        },
        content: 'I agree! The examples were particularly helpful.',
        createdAt: '2024-01-15T11:15:00Z',
        likes: 3
      }
    ]
  },
  {
    id: '3',
    author: {
      name: 'Alex Rivera',
      email: 'alex@example.com'
    },
    content: 'Thanks for sharing this. I\'ve been struggling with this topic and your explanation made it click for me.',
    createdAt: '2024-01-14T16:45:00Z',
    likes: 8
  }
]

export function CommentSection({ postId }: { postId: string }) {
  const [comments] = useState<Comment[]>(mockComments)
  const [newComment, setNewComment] = useState('')
  const [authorName, setAuthorName] = useState('')
  const [authorEmail, setAuthorEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim() || !authorName.trim() || !authorEmail.trim()) return

    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // In a real app, you would submit to your backend here
    console.log('Submitting comment:', { postId, content: newComment, author: { name: authorName, email: authorEmail } })
    
    setNewComment('')
    setAuthorName('')
    setAuthorEmail('')
    setIsSubmitting(false)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase()
  }

  const CommentItem = ({ comment, isReply = false }: { comment: Comment; isReply?: boolean }) => (
    <div className={`${isReply ? 'ml-12' : ''} mb-6`}>
      <div className="flex space-x-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={comment.author.avatar} alt={comment.author.name} />
          <AvatarFallback>{getInitials(comment.author.name)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-gray-900 dark:text-white">
                {comment.author.name}
              </h4>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {formatDate(comment.createdAt)}
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              {comment.content}
            </p>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-red-500 transition-colors">
                <Heart className="h-4 w-4" />
                <span>{comment.likes}</span>
              </button>
              {!isReply && (
                <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-blue-500 transition-colors">
                  <Reply className="h-4 w-4" />
                  <span>Reply</span>
                </button>
              )}
            </div>
          </div>
          {comment.replies && comment.replies.map(reply => (
            <div key={reply.id} className="mt-4">
              <CommentItem comment={reply} isReply={true} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <section className="mt-16 pt-16 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 mb-8">
          <MessageCircle className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Comments ({comments.length})
          </h2>
        </div>

        {/* Comment Form */}
        <form onSubmit={handleSubmit} className="mb-12 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Leave a Comment
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Input
              placeholder="Your name"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              required
            />
            <Input
              type="email"
              placeholder="Your email"
              value={authorEmail}
              onChange={(e) => setAuthorEmail(e.target.value)}
              required
            />
          </div>
          <Textarea
            placeholder="Write your comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="mb-4"
            rows={4}
            required
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Posting...' : 'Post Comment'}
          </Button>
        </form>

        {/* Comments List */}
        <div className="space-y-6">
          {comments.map(comment => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    </section>
  )
}