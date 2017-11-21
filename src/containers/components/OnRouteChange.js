import React from 'react'
import { withRouter } from 'react-router-dom'
import ReactGA from 'react-ga'

ReactGA.initialize('UA-110004353-1', { debug: true })

class OnRouteChange extends React.Component {
  componentDidUpdate (prevProps) {
    if (this.props.location !== prevProps.location) {
      // Scroll To Top
      window.scrollTo(0, 0)
      // Track via Google Analytics
      ReactGA.pageview(window.location.pathname + window.location.search)
    }
  }

  render () {
    return this.props.children
  }
}

export default withRouter(OnRouteChange)
