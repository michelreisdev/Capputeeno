import React, { useState, useEffect } from 'react'
import { useFilter } from '@/hooks/useFilter'
import { useProducts } from '@/hooks/useProducts'
import { Container, PaginationContainer } from './styles'

const Pagination: React.FC = () => {
  const { page, setPage } = useFilter()
  const { sumTotalProduct } = useProducts()
  const totalPag = Math.ceil(sumTotalProduct / 10)
  const [pageFinal, setPageFinal] = useState(false)
  const [pageStart, setPageStart] = useState(true)

  useEffect(() => {
    setPageStart(page === 0)
    setPageFinal(page + 1 === totalPag)
  }, [page, totalPag])

  const handlePaginationClick = (newPage: number) => {
    setPage(newPage)
  }

  const generatePaginationItems = () => {
    const items = []
    for (let i = 0; i < totalPag; i++) {
      items.push(
        <PaginationContainer
          key={i}
          cont={i}
          pag={page}
          onClick={() => handlePaginationClick(i)}
        >
          {i + 1}
        </PaginationContainer>,
      )
    }
    return items
  }

  return (
    <Container>
      {generatePaginationItems()}
      <PaginationContainer
        disabled={pageStart}
        onClick={() => handlePaginationClick(page - 1)}
        arrow="left"
      >
        {'<'}
      </PaginationContainer>
      <PaginationContainer
        disabled={pageFinal}
        onClick={() => handlePaginationClick(page + 1)}
        arrow="right"
      >
        {'>'}
      </PaginationContainer>
    </Container>
  )
}

export default Pagination
