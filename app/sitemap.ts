import { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://phanlakhon-dev.vercel.app'
  const locales = routing.locales
  
  return locales.flatMap((locale: string) => [
    {
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
  ])
}
