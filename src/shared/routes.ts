import { FunctionComponent } from 'react'
import { fetchTopBlogPosts } from './api'
import { About } from './pages/about'
import { Blog } from './pages/blog'
import { Home } from './pages/home'

type Route = {
  header: string
  path: string
  exact?: boolean
  component: FunctionComponent<any>
  fetchInitData?: () => Promise<any>
}

export const routes: Route[] = [
  {
    header: 'home',
    path: '/',
    exact: true,
    component: Home
  },
  {
    header: 'blog',
    path: '/blog',
    component: Blog,
    fetchInitData: () => fetchTopBlogPosts()
  },
  {
    header: 'about',
    path: '/about',
    component: About
  }
]
