import { Github, Twitter, Linkedin, Mail } from 'lucide-react'
import { Button } from '../ui/button'
import { NewsletterSignup } from '../blog/NewsletterSignup'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="mb-16">
          <NewsletterSignup />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-10 w-10 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <h3 className="text-2xl font-bold">Optimized Blog Platform</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Discover insightful articles, tutorials, and stories from our community of writers and experts. 
              Built for performance, designed for readers.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" className="h-10 w-10 p-0 text-gray-300 hover:text-white hover:bg-gray-800">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="h-10 w-10 p-0 text-gray-300 hover:text-white hover:bg-gray-800">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="h-10 w-10 p-0 text-gray-300 hover:text-white hover:bg-gray-800">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="h-10 w-10 p-0 text-gray-300 hover:text-white hover:bg-gray-800">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors hover:underline">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:underline">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:underline">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:underline">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Categories</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors hover:underline">Technology</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:underline">Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:underline">Business</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:underline">Lifestyle</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:underline">Tutorial</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p>&copy; 2024 Optimized Blog Platform. All rights reserved.</p>
          <p className="mt-2 md:mt-0 text-sm">
            Built with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}