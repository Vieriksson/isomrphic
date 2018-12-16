import * as React from 'react'
import { fetchTopBlogPosts } from '../api'

declare var __isBrowser__: string
declare global {
  interface Window {
    __INITIAL_DATA__: string
  }
}

type Props = {
  staticContext: {
    data: any
  }
}

type State = {
  loading: boolean
  posts: any[]
}

export class Blog extends React.Component<Props, State> {
  constructor(props) {
    super(props)

    let posts
    if (__isBrowser__ && window.__INITIAL_DATA__) {
      posts = window.__INITIAL_DATA__
      delete window.__INITIAL_DATA__
    } else {
      posts = this.props.staticContext ? this.props.staticContext.data : []
    }

    this.state = {
      loading: posts.length === 0,
      posts
    }
  }

  componentDidMount() {
    if (this.state.loading) {
      fetchTopBlogPosts().then((posts: any[]) => {
        this.setState({ posts, loading: false })
      })
    }
  }

  render() {
    return (
      <div>{this.state.loading ? <div>Loading...</div> : <div>{this.state.posts.length}</div>}</div>
    )
  }
}
