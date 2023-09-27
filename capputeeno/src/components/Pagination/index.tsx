import React, { useState, useEffect } from 'react'
import { useFilter } from '@/hooks/useFilter'
import { useProducts } from '@/hooks/useProducts'
import { Container, PaginationContainer } from './styles'

const Pagination: React.FC = () => {
  const { page, setPage } = useFilter()
  const { sumTotalProduct } = useProducts()
  const totalPages = Math.ceil(sumTotalProduct / 10)
  const [pageFinal, setPageFinal] = useState(false)
  const [pageStart, setPageStart] = useState(true)

  useEffect(() => {
    setPageStart(page === 0)
    setPageFinal(page + 1 === totalPages)
  }, [page, totalPages])

  const handlePaginationClick = (newPage: number) => {
    setPage(newPage)
  }

  const generatePaginationItem = (pageNumber: number) => (
    <PaginationContainer
      key={pageNumber}
      cont={pageNumber - 1}
      pag={page}
      onClick={() => handlePaginationClick(pageNumber - 1)}
    >
      {pageNumber}
    </PaginationContainer>
  )

  const generatePaginationItems = () => {
    return Array.from({ length: totalPages }, (_, i) =>
      generatePaginationItem(i + 1),
    )
  }

  return (
    <Container>
      {generatePaginationItems()}
      <PaginationContainer
        disabled={pageStart}
        onClick={() => handlePaginationClick(page - 1)}
        arrow={'left'}
        role="button"
      >
        {'<'}
      </PaginationContainer>
      <PaginationContainer
        disabled={pageFinal}
        onClick={() => handlePaginationClick(page + 1)}
        arrow={'right'}
        role="button"
      >
        {'>'}
      </PaginationContainer>
    </Container>
  )
}

export default Pagination
