import { styled } from 'styled-components'

export const Input = styled.input`
  width: 352px;
  border-radius: 8px;
  padding: 10px 16px;
  background-color: var(--bg-secondary);
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: var(--text-dark);
  border: none;
`
export const SearchBarInputContainer = styled.div`
  position: relative;
`

export const SearchIconSvg = styled.svg`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`
