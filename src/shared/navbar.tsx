import * as React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { routes } from './routes'

const maxRouteIndex = routes.length - 1

export const Navbar = () => (
  <Wrapper>
    {routes.map(({ header, path }, index) => (
      <Item key={header} last={index === maxRouteIndex}>
        <ItemLink exact to={path}>
          {header}
        </ItemLink>
      </Item>
    ))}
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  background-color: #f96e5b;

  @media all and (max-width: 600px) {
    flex-wrap: wrap;
  }
`
const Item = styled.div`
  ${({ last }: { last: boolean }) => (last ? 'flex: 1' : '')}
  padding: 15px 25px;
  text-transform: uppercase;
  font-weight: light;

  @media all and (max-width: 600px) {
    flex-basis: 50%;
  }
  @media all and (max-width: 400px) {
    flex-basis: 100%;
  }
`

const activeClassName = 'active'
const ItemLink = styled(NavLink).attrs({
  activeClassName
})`
  text-decoration: none;
  color: #ffffff;
  letter-spacing: 1px;
  width: 200px;
  font-weight: bold;
  &:hover {
    color: #333333;
  }
  &.${activeClassName} {
    color: #333333;
  }
`
