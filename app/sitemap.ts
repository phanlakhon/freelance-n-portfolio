import { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'
import { projects } from '@/lib/projects'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://phanlakhon-dev.vercel.app'
  const locales = routing.locales
  
  const staticPages = locales.map((locale: string) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 1,
  }))

  const workPages = locales.flatMap((locale: string) => 
    projects.map((project) => ({
      url: `${baseUrl}/${locale}/work/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))
  )

  return [...staticPages, ...workPages]
}
