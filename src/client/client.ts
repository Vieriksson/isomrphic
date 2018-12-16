import * as React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { App } from '../shared/app'

const AppComponent = React.createElement(App)
const ClientRouter = React.createElement(BrowserRouter, null, AppComponent)

hydrate(ClientRouter, document.getElementById('app'))
