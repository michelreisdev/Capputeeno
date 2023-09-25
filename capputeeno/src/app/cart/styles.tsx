import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100%;
  gap: 32px;
  min-width: 736px;
`
export const CardItems = styled.div`
  height: 100%;

  p:nth-child(2n + 0) {
    font-size: 24px;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
    width: 175px;
    height: 36px;
    top: 151px;
    left: 160px;
  }
  p:nth-child(2n + 1) {
    width: max-content;
    height: 24px;
    top: 193px;
    left: 160px;

    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 23px;
  }
  p:nth-child(2n + 1) span {
    font-size: 16px;
    font-weight: 800;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }
`
export const OrderSummaryCard = styled.div`
  width: 352px;
  height: 700px;
  padding: 0 24px 24px 24px;
  display: flex;
  flex-direction: column;
  background: var(--shapes-01);
  > p {
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--text-dark-01);
    margin: 16px auto 29px 0;
  }
`

export const OrderSummaryCardFooter = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-grow: 1;
  flex-direction: column;
  gap: 12px;
`
export const OrderSummaryCardFooterItems = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: #737380;
  cursor: pointer;
  text-decoration: underline;
  text-transform: uppercase;
`
export const OrderEmpty = styled.p`
  width: 736px !important;
`
