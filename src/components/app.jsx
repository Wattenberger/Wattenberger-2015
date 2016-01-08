import '../stylesheets/main.less';
import React from 'react';
import {Router, PropTypes} from 'react-router';
import Nav from './molecules/nav/nav';

const pages = ["about","contact"]

let KEYPRESS_HANDLER = null

let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      changingPage: false
    }
  }

  changePage(page) {
    this.context.history.pushState(null, '/' + page + "/")
  }

  getPathname() {
    return this.props.location.pathname.replace(/\//g, "")
  }

  movePage(dir) {
    let newPageIdx = pages.indexOf(this.getPathname()) + dir
    if (newPageIdx < 0) newPageIdx = pages.length - 1
    if (newPageIdx > pages.length - 1) newPageIdx = 0
    this.changePage(pages[newPageIdx])
  }

  keypress(e) {
    let keys = {
      37: -1,
      38: -1,
      39:  1,
      40:  1,
    }
    if (!keys[e.keyCode]) return
    this.movePage(keys[e.keyCode])
  }

  componentDidMount() {
    KEYPRESS_HANDLER = (e) => this.keypress(e)
    document.addEventListener("keydown", KEYPRESS_HANDLER)

    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(2)
      })
    })
  }

  render() {
    return (
      <div className='App'>
        <Nav />
        <div className="main">
          <h2>{this.getPathname()}</h2>
          <ReactCSSTransitionGroup component="div" transitionName="slide-out">
            {React.cloneElement(this.props.children || <div />, { key: this.getPathname() })}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    )
  }
}

export default App

App.contextTypes = { history: PropTypes.history }
