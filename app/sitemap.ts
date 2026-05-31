import { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'
import { projects } from '@/lib/projects'
import { getGumroadProducts } from '@/lib/gumroad'
import { getProductSlug } from '@/lib/product-seo'
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://phanlakhon-downlospace.space'
  const locales = routing.locales
  
  const staticPages = locales.map((locale: string) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 1,
  }))

  const productPages = locales.map((locale: string) => ({
    url: `${baseUrl}/${locale}/products`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }))

  const gumroadResult = await getGumroadProducts()
  const productDetailPages = gumroadResult.status === 'ready'
    ? locales.flatMap((locale: string) =>
        gumroadResult.products.map((product) => ({
          url: `${baseUrl}/${locale}/products/${getProductSlug(product)}`,
          lastModified: new Date(),
          changeFrequency: 'weekly' as const,
          priority: 0.85,
        }))
      )
    : []

  const workPages = locales.flatMap((locale: string) => 
    projects.map((project) => ({
      url: `${baseUrl}/${locale}/work/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))
  )

  return [...staticPages, ...productPages, ...productDetailPages, ...workPages]
}
