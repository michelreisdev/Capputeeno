'use client'
import FilterBar from '@/components/FilterBar'
import styles from './page.module.css'
import ProductList from '@/components/ProductsList'
import { DefaultPageLayout } from '@/components/Layout'
import Pagination from '@/components/Pagination'

export default function Home() {
  return (
    <DefaultPageLayout>
      <main className={styles.main}>
        <FilterBar />
        <Pagination />
        <ProductList />
      </main>
    </DefaultPageLayout>
  )
}
