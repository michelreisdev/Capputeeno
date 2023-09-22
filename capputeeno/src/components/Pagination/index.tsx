import { useFilter } from '@/hooks/useFilter'
import { Container, PaginationContainer } from './styles'
import { useProducts } from '@/hooks/useProducts'

export default function Pagination() {
  const { page, setPage } = useFilter()
  const { sumTotalProduct } = useProducts()
  const handlePage = (value: number) => {
    setPage(value)
  }
  const pag = sumTotalProduct / 10

  const handleNextPage = () => {
    const pages = page + 1
    if (pages === pag) return
    if (page < pag) return setPage(pages)
  }
  const handlePreviousPage = () => {
    if (page > 0) return setPage(page - 1)
  }

  const listaDeItens = []
  for (let i = 0; i < pag; i++) {
    listaDeItens.push(
      <PaginationContainer
        key={i}
        cont={i}
        pag={page}
        onClick={() => handlePage(i)}
      >
        {i + 1}
      </PaginationContainer>,
    )
  }
  return (
    <Container>
      {listaDeItens}
      <PaginationContainer onClick={handlePreviousPage} arrow={'left'}>
        {'<'}
      </PaginationContainer>
      <PaginationContainer onClick={handleNextPage} arrow={'right'}>
        {'>'}
      </PaginationContainer>
    </Container>
  )
}
