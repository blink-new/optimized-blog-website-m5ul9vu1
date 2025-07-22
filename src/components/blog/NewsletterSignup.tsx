import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail, CheckCircle } from 'lucide-react'
import { toast } from '@/hooks/use-toast'

export function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // In a real app, you would submit to your newsletter service here
    console.log('Newsletter signup:', email)
    
    setIsSubscribed(true)
    setEmail('')
    setIsSubmitting(false)
    
    toast({
      title: "Successfully subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    })
  }

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 text-center border border-blue-200 dark:border-blue-800">
        <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Welcome to our community!
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          You'll receive our latest articles and updates in your inbox.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
      <div className="text-center mb-6">
        <Mail className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Stay Updated
        </h3>
        <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
          Get the latest articles and insights delivered straight to your inbox. 
          Join thousands of readers who never miss an update.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
            required
          />
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6"
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </Button>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 text-center">
          No spam, unsubscribe at any time. We respect your privacy.
        </p>
      </form>
    </div>
  )
}