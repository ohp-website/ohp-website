import { createClient } from '@/lib/supabase-server'
import TestimonialsAdmin from './TestimonialsAdmin'

export default async function TestimonialsAdminPage() {
  const supabase = await createClient()

  const { data: testimonials } = await supabase
    .from('testimonials')
    .select('*')
    .order('is_featured', { ascending: false })
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: false })

  return <TestimonialsAdmin initialTestimonials={testimonials ?? []} />
}
