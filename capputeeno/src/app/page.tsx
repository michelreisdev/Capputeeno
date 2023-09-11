'use client'
import FilterBar from '@/components/FilterBar'
import styles from './page.module.css'
import ProductList from '@/components/ProductsList'
import { DefaultPageLayout } from '@/components/Layout'

export default function Home() {
  return (
    <DefaultPageLayout>
      <main className={styles.main}>
        <FilterBar />
        <ProductList />
      </main>
    </DefaultPageLayout>
  )
}
