'use server'

import { createClient } from '@/lib/supabase-server'
import { revalidatePath } from 'next/cache'

export async function uploadTestimonial(formData: FormData) {
  const supabase = await createClient()
  const file = formData.get('file') as File
  const isFeatured = formData.get('is_featured') === 'on'

  if (!file || file.size === 0) {
    return { error: 'Selecteer een afbeelding.' }
  }

  const ext = file.name.split('.').pop()
  const filename = `${Date.now()}.${ext}`

  const { error: uploadError } = await supabase.storage
    .from('testimonials')
    .upload(filename, file, { contentType: file.type })

  if (uploadError) {
    return { error: `Upload mislukt: ${uploadError.message}` }
  }

  const { data: urlData } = supabase.storage
    .from('testimonials')
    .getPublicUrl(filename)

  const { data, error: insertError } = await supabase
    .from('testimonials')
    .insert({ image_url: urlData.publicUrl, is_featured: isFeatured })
    .select()
    .single()

  if (insertError) {
    return { error: `Opslaan mislukt: ${insertError.message}` }
  }

  revalidatePath('/')
  return { testimonial: data }
}

export async function deleteTestimonial(id: string) {
  const supabase = await createClient()

  const { data } = await supabase
    .from('testimonials')
    .select('image_url')
    .eq('id', id)
    .single()

  if (data?.image_url) {
    const filename = data.image_url.split('/').pop()
    if (filename) {
      await supabase.storage.from('testimonials').remove([filename])
    }
  }

  await supabase.from('testimonials').delete().eq('id', id)
  revalidatePath('/')
}

export async function toggleFeatured(id: string, isFeatured: boolean) {
  const supabase = await createClient()
  await supabase.from('testimonials').update({ is_featured: isFeatured }).eq('id', id)
  revalidatePath('/')
}
