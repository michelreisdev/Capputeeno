import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 16px;
  background: var(--shapes-01);
  display: flex;
  width: 736px;
  height: 211px;
  border-radius: 8px;
  overflow: hidden;
`
export const InfoProduct = styled.div`
  width: 480px !important;
  padding: 16px 16px 24px 31px;
  > p {
    margin: 12px 4px 25px;
    height: 64px !important;
    width: auto !important;
    font-size: 12px !important;
    font-weight: 400 !important;
    line-height: 18px !important;
    letter-spacing: 0em !important;
    text-align: left !important;
    color: var(--shapes-dark);
  }
`
export const SelectQuantity = styled.select`
  padding: 8px;
  border: 1.5px solid var(--border-color);
  border-radius: 8px;
  background-color: var(--bg-secondary);
  color: var(--text-dark);
  font-weight: 400;
  font-size: 16px;
  width: 65px;
  height: 40px;
`
export const PriceItem = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: right;
`
export const CardItemBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`
export const CardItemTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  height: 30px;

  p {
    width: 289px !important;
    height: 30px !important;
    font-size: 20px !important;
    font-weight: 300 !important;
    line-height: 30px !important;
    letter-spacing: 0em !important;
    text-align: left !important;
  }
  div {
    cursor: pointer;
  }
`
