import styled from 'styled-components'

interface PaginationContainerProps {
  pag?: number
  cont?: number
  arrow?: string
}

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: 24px;
`

export const PaginationContainer = styled.button<PaginationContainerProps>`
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background-color: #e9e9f0;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(p) =>
    p.pag === p.cont && p.pag !== undefined
      ? 'border: 1px solid #ffa585;'
      : 'border: none;'}
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: #737380;
  &:disabled {
    background-color: #dce2e6;
    cursor: not-allowed;
  }
  ${(p) => p.arrow === 'left' && 'margin-left: 8px;'}
  ${(p) => p.arrow === 'right' && 'margin-left: 4px;'}
  ${(p) => p.arrow === undefined && 'margin-left: 2px;'}
`
