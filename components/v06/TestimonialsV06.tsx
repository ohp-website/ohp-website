import { createClient } from '@/lib/supabase-server'
import TestimonialsV06Client from './TestimonialsV06Client'

export default async function TestimonialsV06() {
  let testimonials = null

  try {
    const supabase = await createClient()
    const { data } = await supabase
      .from('testimonials')
      .select('id, image_url, is_featured')
      .order('is_featured', { ascending: false })
      .order('sort_order', { ascending: true })
      .order('created_at', { ascending: false })
    testimonials = data
  } catch {
    // Supabase nog niet geconfigureerd — fallback op hardcoded screenshots
  }

  // Fallback op hardcoded screenshots als Supabase nog niet gevuld is
  const items = testimonials && testimonials.length > 0
    ? testimonials
    : fallbackScreenshots.map((url, i) => ({
        id: String(i),
        image_url: url,
        is_featured: false,
      }))

  return <TestimonialsV06Client items={items} />
}

const fallbackScreenshots = [
  '/images/testimonials-leefstijl/Screenshot_20240326-105424_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240326-121455_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240405-101509_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240405-191834_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240406-051841_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240406-052021_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240406-052043_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240406-052325_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240406-124551_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240411-103252_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240411-103258_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240412-095544_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240509-060129_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240517-174847_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240615-052432_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240626-050021_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240627-045134_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240627-045932_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240728-062411_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240802-061707_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240811-065014_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240815-053034_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240816-054211_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240818-104239_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240818-104247_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20241002-111727_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20241002-111738_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20241003-052405_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20241003-092850_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20241018-151252_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20241024-143221_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20241030-112844_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20241102-101702_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20241105-053951_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20241120-063317_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20250307-053323_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20250311-053330_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20250317-055015_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20250822-152714_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20251002-062027_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20260106_160421_Instagram.jpg',
]
