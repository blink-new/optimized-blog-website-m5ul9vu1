import { BlogPost } from '../types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Web Development: Trends to Watch in 2024',
    excerpt: 'Explore the cutting-edge technologies and methodologies that are shaping the future of web development, from AI integration to performance optimization.',
    content: `
# The Future of Web Development: Trends to Watch in 2024

The web development landscape is evolving at an unprecedented pace. As we navigate through 2024, several key trends are emerging that will define how we build and interact with web applications.

## AI-Powered Development

Artificial Intelligence is revolutionizing how we approach web development. From code generation to automated testing, AI tools are becoming indispensable for modern developers.

### Key Benefits:
- Faster development cycles
- Improved code quality
- Enhanced user experiences
- Automated optimization

## Performance-First Architecture

Modern web applications demand exceptional performance. The focus has shifted from feature-rich applications to performance-optimized solutions that deliver instant user experiences.

## Conclusion

The future of web development is bright, with exciting technologies on the horizon. Staying updated with these trends will be crucial for developers looking to remain competitive in the evolving landscape.
    `,
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      bio: 'Senior Full-Stack Developer with 8+ years of experience in modern web technologies.'
    },
    publishedAt: '2024-01-15',
    readingTime: 8,
    category: 'Technology',
    tags: ['Web Development', 'AI', 'Performance', 'Trends'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
    slug: 'future-of-web-development-2024'
  },
  {
    id: '2',
    title: 'Building Scalable React Applications: Best Practices',
    excerpt: 'Learn essential patterns and practices for building React applications that can grow with your business needs while maintaining code quality.',
    content: `
# Building Scalable React Applications: Best Practices

Creating React applications that scale effectively requires careful planning and adherence to proven patterns. This guide covers the essential practices for building maintainable, performant React apps.

## Component Architecture

A well-structured component hierarchy is the foundation of any scalable React application. Focus on creating reusable, single-responsibility components.

### Key Principles:
- Keep components small and focused
- Use composition over inheritance
- Implement proper prop validation
- Leverage custom hooks for logic reuse

## State Management

Choosing the right state management solution is crucial for application scalability. Consider your app's complexity and team size when making this decision.

## Performance Optimization

React provides several built-in optimization techniques that can significantly improve your application's performance.

## Conclusion

Building scalable React applications requires discipline and adherence to best practices. By following these guidelines, you'll create applications that are maintainable and performant.
    `,
    author: {
      name: 'Michael Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      bio: 'React specialist and technical lead with expertise in large-scale application architecture.'
    },
    publishedAt: '2024-01-12',
    readingTime: 12,
    category: 'Development',
    tags: ['React', 'JavaScript', 'Architecture', 'Best Practices'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
    slug: 'building-scalable-react-applications'
  },
  {
    id: '3',
    title: 'CSS Grid vs Flexbox: When to Use Each',
    excerpt: 'A comprehensive comparison of CSS Grid and Flexbox, helping you choose the right layout method for your specific use cases.',
    content: `
# CSS Grid vs Flexbox: When to Use Each

Both CSS Grid and Flexbox are powerful layout systems, but they excel in different scenarios. Understanding when to use each will make you a more effective developer.

## Understanding Flexbox

Flexbox is designed for one-dimensional layouts. It excels at distributing space and aligning items along a single axis.

### Best Use Cases:
- Navigation bars
- Card layouts
- Centering content
- Equal height columns

## Understanding CSS Grid

CSS Grid is built for two-dimensional layouts, allowing you to control both rows and columns simultaneously.

### Best Use Cases:
- Complex page layouts
- Magazine-style designs
- Dashboard interfaces
- Image galleries

## Making the Right Choice

The decision between Grid and Flexbox often comes down to the complexity of your layout and whether you need one or two-dimensional control.

## Conclusion

Both CSS Grid and Flexbox have their place in modern web development. Understanding their strengths will help you create better, more maintainable layouts.
    `,
    author: {
      name: 'Emma Thompson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      bio: 'CSS expert and design systems architect with a passion for creating beautiful, functional interfaces.'
    },
    publishedAt: '2024-01-10',
    readingTime: 6,
    category: 'Design',
    tags: ['CSS', 'Layout', 'Grid', 'Flexbox'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop',
    slug: 'css-grid-vs-flexbox'
  },
  {
    id: '4',
    title: 'The Art of API Design: Creating Developer-Friendly Interfaces',
    excerpt: 'Discover the principles and practices that make APIs intuitive, efficient, and enjoyable to work with from a developer perspective.',
    content: `
# The Art of API Design: Creating Developer-Friendly Interfaces

Great API design is both an art and a science. It requires balancing functionality, simplicity, and developer experience to create interfaces that are both powerful and intuitive.

## Core Principles

Successful APIs follow several key principles that make them easy to understand and use.

### Consistency is Key
- Use consistent naming conventions
- Follow predictable patterns
- Maintain uniform response structures

## Documentation Matters

No matter how well-designed your API is, poor documentation can make it unusable. Invest in comprehensive, clear documentation.

## Versioning Strategy

Plan for change from the beginning. A solid versioning strategy ensures backward compatibility while allowing for evolution.

## Conclusion

Creating developer-friendly APIs requires careful consideration of design principles, documentation, and long-term maintenance. The investment in good design pays dividends in adoption and developer satisfaction.
    `,
    author: {
      name: 'David Kim',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      bio: 'Backend architect and API design specialist with experience building systems used by millions of developers.'
    },
    publishedAt: '2024-01-08',
    readingTime: 10,
    category: 'Backend',
    tags: ['API', 'Design', 'Backend', 'Documentation'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    slug: 'art-of-api-design'
  },
  {
    id: '5',
    title: 'Mobile-First Design: Why It Matters More Than Ever',
    excerpt: 'Understanding the importance of mobile-first design in today\'s digital landscape and how to implement it effectively.',
    content: `
# Mobile-First Design: Why It Matters More Than Ever

With mobile traffic accounting for over 50% of web usage, mobile-first design isn't just a trend—it's a necessity for modern web development.

## The Mobile-First Approach

Mobile-first design means starting with the smallest screen size and progressively enhancing the experience for larger screens.

### Benefits:
- Better performance on mobile devices
- Improved user experience
- Higher search engine rankings
- Future-proof design approach

## Implementation Strategies

Successfully implementing mobile-first design requires a shift in thinking and approach.

## Common Pitfalls

Avoid these common mistakes when implementing mobile-first design.

## Conclusion

Mobile-first design is essential for creating successful web experiences in today's mobile-dominated world. Start small, think progressively, and always prioritize your mobile users.
    `,
    author: {
      name: 'Lisa Park',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      bio: 'UX designer and mobile experience specialist focused on creating intuitive, accessible interfaces.'
    },
    publishedAt: '2024-01-05',
    readingTime: 7,
    category: 'Design',
    tags: ['Mobile', 'UX', 'Responsive', 'Design'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop',
    slug: 'mobile-first-design-importance'
  },
  {
    id: '6',
    title: 'TypeScript Best Practices for Large Codebases',
    excerpt: 'Essential TypeScript patterns and practices for maintaining type safety and code quality in enterprise-level applications.',
    content: `
# TypeScript Best Practices for Large Codebases

TypeScript shines in large codebases where type safety and maintainability are crucial. Here are the practices that will help you leverage TypeScript effectively.

## Type System Mastery

Understanding TypeScript's type system deeply is essential for writing maintainable code.

### Advanced Types:
- Union and intersection types
- Conditional types
- Mapped types
- Template literal types

## Project Structure

Organizing your TypeScript project properly sets the foundation for long-term success.

## Configuration Best Practices

A well-configured TypeScript project prevents common issues and improves developer experience.

## Conclusion

TypeScript's power lies in its ability to catch errors early and improve code maintainability. Following these best practices will help you build robust, scalable applications.
    `,
    author: {
      name: 'Alex Johnson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      bio: 'TypeScript evangelist and senior developer with extensive experience in large-scale application development.'
    },
    publishedAt: '2024-01-03',
    readingTime: 9,
    category: 'Development',
    tags: ['TypeScript', 'JavaScript', 'Best Practices', 'Enterprise'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop',
    slug: 'typescript-best-practices-large-codebases'
  }
];

export const categories = [
  { id: '1', name: 'Technology', slug: 'technology', count: 1 },
  { id: '2', name: 'Development', slug: 'development', count: 2 },
  { id: '3', name: 'Design', slug: 'design', count: 2 },
  { id: '4', name: 'Backend', slug: 'backend', count: 1 }
];