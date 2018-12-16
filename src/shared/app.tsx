import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import { Navbar } from './navbar'
import { routes } from './routes'

export const App = () => (
  <Wrapper>
    <Navbar />
    <Content>
      <Switch>
        {routes.map(({ path, exact, component: Component }) => (
          <Route
            key={path}
            path={path}
            exact={exact}
            render={({ staticContext }) => <Component staticContext={staticContext} />}
          />
        ))}
        <Route component={NoMatch} />
      </Switch>
    </Content>
  </Wrapper>
)

const Wrapper = styled.div``

const Content = styled.div`
  margin: 80px;
`

function NoMatch() {
  return <div>404 din rackare</div>
}
