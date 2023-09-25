import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  section {
    display: flex;
    align-items: center;
    gap: 32px;

    > div {
      height: 580px;
      width: 448px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      span:first-child {
      }
    }

    img {
      width: 640px;
      height: 580px;
    }
  }
`

export const ProductInfo = styled.div`
  h2 {
    font-size: 32px;
    font-weight: 300;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--text-dark);
  }

  span:nth-of-type(2) {
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--shapes-dark);
  }

  p {
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 24px;
  }

  > div {
    h3 {
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
      color: var(--text-dark);
      margin-top: 58px;
    }

    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 21px;
      letter-spacing: 0em;
      text-align: left;
      color: var(--text-dark-2);
      margin-top: 8px;
    }
  }
`
