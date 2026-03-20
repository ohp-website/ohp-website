'use client'

import { useRouter } from 'next/navigation'
import { useCart } from '@/lib/cart'
import styles from './AddBoekButton.module.css'

export default function AddBoekButton() {
  const { addItem } = useCart()
  const router = useRouter()

  const handleAdd = () => {
    addItem({
      id: 'boek-carnivoor',
      type: 'product',
      name: 'Een lang leven vitaal',
      price: 24.95,
    })
    router.push('/winkelwagen/')
  }

  return (
    <button onClick={handleAdd} className={styles.btn}>
      Bestel nu — € 24,95
    </button>
  )
}
