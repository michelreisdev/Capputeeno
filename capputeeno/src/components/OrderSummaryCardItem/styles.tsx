import styled from 'styled-components'

interface TotalProps {
  $total?: boolean
}

export const OrderDescription = styled.div<TotalProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 304px;
  padding-bottom: ${(p) => (p.$total ? '0' : '8px')};
`
export const Title = styled.p<TotalProps>`
  font-size: 16px;
  font-weight: ${(p) => (p.$total ? '600' : '300')};
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--text-dark-01);
  height: 24px;
`

export const Price = styled.span<TotalProps>`
  font-size: 16px;
  font-weight: ${(p) => (p.$total ? '600' : '300')};
  line-height: 24px;
  letter-spacing: 0em;
  text-align: right;
  color: var(--text-dark-01);
  height: 24px;
`
export const Separator = styled.div`
  border: 1px solid #dce2e5 !important;
  width: 304px;
  border: 1px;
  angle: 0 deg;
  margin-top: 16px;
  margin-bottom: 8px;
`
