'use client'

import { styled } from 'styled-components'

export const DefaultPageLayout = styled.div`
  min-height: 100vh;
  background-color: var(--bg-primary);

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    padding-top: 34px;
    width: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
