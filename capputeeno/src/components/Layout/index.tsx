'use client'

import { styled } from 'styled-components'

export const DefaultPageLayout = styled.div`
  min-height: 100vh;
  background-color: var(--bg-primary);

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    padding: 34px 160px;
  }
`
