import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface TOCItem {
  id: string
  text: string
  level: number
}

export function TableOfContents({ content }: { content: string }) {
  const [toc, setToc] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    // Extract headings from content
    const headingRegex = /^(#{1,3})\s+(.+)$/gm
    const headings: TOCItem[] = []
    let match

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length
      const text = match[2].trim()
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      
      headings.push({ id, text, level })
    }

    setToc(headings)
  }, [content])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0% -35% 0%' }
    )

    toc.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [toc])

  if (toc.length === 0) return null

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 w-64 max-h-96 overflow-y-auto">
      <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-4 shadow-lg">
        <h3 className="font-semibold text-sm text-gray-900 dark:text-white mb-3">
          Table of Contents
        </h3>
        <nav className="space-y-1">
          {toc.map(({ id, text, level }) => (
            <button
              key={id}
              onClick={() => scrollToHeading(id)}
              className={cn(
                'block w-full text-left text-sm transition-colors hover:text-blue-600 dark:hover:text-blue-400',
                level === 1 && 'font-medium',
                level === 2 && 'ml-3',
                level === 3 && 'ml-6',
                activeId === id
                  ? 'text-blue-600 dark:text-blue-400 font-medium'
                  : 'text-gray-600 dark:text-gray-400'
              )}
            >
              {text}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}