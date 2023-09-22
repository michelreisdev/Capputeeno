import { FilterType } from '@/types/filter-types'
import { PriorityTypes } from '@/types/priority-types'

export function getCategoryByType(type: FilterType) {
  if (type === FilterType.MUG) return 'mugs'
  if (type === FilterType.SHIRT) return 't-shirts'
  return ''
}

export function getFieldByPriority(priority: PriorityTypes) {
  if (priority === PriorityTypes.NEWS)
    return { field: 'created_at', order: 'ASC' }
  if (priority === PriorityTypes.BIGGEST_PRICE)
    return { field: 'price_in_cents', order: 'ASC' }
  if (priority === PriorityTypes.MINOR_PRICE)
    return { field: 'price_in_cents', order: 'ASC' }
  return { field: 'sales', order: 'DSC' }
}
export const mountQuery = (
  type: FilterType,
  priority: PriorityTypes,
  page: number,
) => {
  if (type === FilterType.ALL && priority === PriorityTypes.POPULARITY)
    return `query {
        allProducts(sortField: "sales", sortOrder: "DSC", page: ${page}, perPage: 10) {
          id
          name
          price_in_cents
          image_url
        }
        _allProductsMeta {
          count
        }
      }
    `
  const sortSettings = getFieldByPriority(priority)
  const categoryFilter = getCategoryByType(type)
  const en = `
  query {
      allProducts(page: ${page}, perPage: 10, sortField: "${
        sortSettings.field
      }", sortOrder: "${sortSettings.order}", ${
        categoryFilter ? `filter: { category: "${categoryFilter}"}` : ''
      }) {
        id
        name
        price_in_cents
        image_url
        category
      }
      _allProductsMeta(filter: { category: "${categoryFilter}"}) {
        count
      }
    }
  `

  return en
}
