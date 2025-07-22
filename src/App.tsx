import { useState, useEffect, useMemo } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { FeaturedPost } from './components/blog/FeaturedPost';
import { BlogGrid } from './components/blog/BlogGrid';
import { BlogPost } from './components/blog/BlogPost';
import { BlogFilters } from './components/blog/BlogFilters';
import { blogPosts } from './data/blogPosts';
import { BlogPost as BlogPostType } from './types/blog';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPostType | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Dark mode effect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = searchQuery === '' || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === null || 
        post.category.toLowerCase() === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const handlePostClick = (post: BlogPostType) => {
    setSelectedPost(post);
    window.scrollTo(0, 0);
  };

  const handleBackToBlog = () => {
    setSelectedPost(null);
    window.scrollTo(0, 0);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory(null);
  };

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-background">
        <Header 
          onSearch={handleSearch}
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
        />
        <main className="container mx-auto px-4 py-12">
          <BlogPost post={selectedPost} onBack={handleBackToBlog} />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onSearch={handleSearch}
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(!darkMode)}
      />
      
      <main className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="py-12 lg:py-20">
          <div className="text-center space-y-6 mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Welcome to Our
              <span className="text-primary"> Blog Platform</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover insights, tutorials, and stories from our community of developers, 
              designers, and technology enthusiasts.
            </p>
          </div>
          
          {/* Featured Post */}
          {featuredPost && !searchQuery && !selectedCategory && (
            <div className="mb-16">
              <FeaturedPost post={featuredPost} onClick={handlePostClick} />
            </div>
          )}
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-12">
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">
                {searchQuery || selectedCategory ? 'Search Results' : 'Latest Posts'}
              </h2>
              <span className="text-muted-foreground">
                {filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''}
              </span>
            </div>
            
            <BlogFilters
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              searchQuery={searchQuery}
              onClearFilters={handleClearFilters}
            />
            
            <BlogGrid 
              posts={regularPosts} 
              onPostClick={handlePostClick}
            />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-muted/30 -mx-4 px-4 mt-20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">About Our Platform</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our blog platform is designed with performance and user experience in mind. 
              We focus on delivering high-quality content about web development, design, 
              and technology trends that matter to modern developers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Fast Loading</h3>
                <p className="text-muted-foreground">Optimized for speed and performance</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">SEO Friendly</h3>
                <p className="text-muted-foreground">Built with search engines in mind</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Mobile First</h3>
                <p className="text-muted-foreground">Responsive design for all devices</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Get In Touch</h2>
            <p className="text-lg text-muted-foreground">
              Have a question or want to contribute? We'd love to hear from you.
            </p>
            <div className="bg-muted/50 rounded-xl p-8 space-y-4">
              <p className="font-medium">Contact Information</p>
              <div className="space-y-2 text-muted-foreground">
                <p>Email: hello@blogplatform.com</p>
                <p>Twitter: @blogplatform</p>
                <p>GitHub: github.com/blogplatform</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;