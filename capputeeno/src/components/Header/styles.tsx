import styled from 'styled-components'

export const TegHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 160px;
  padding-right: 160px;
`

export const Logo = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 40px;
  line-height: 100%;
  text-decoration: none;
  width: 544px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (min-width: ${(props) => props.theme.tableBreakpoint}) {
    font-size: 24px;
  }

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    font-size: 40px;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`
