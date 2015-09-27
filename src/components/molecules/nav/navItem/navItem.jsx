import React, {Component, PropTypes} from "react"
import {Link} from 'react-router';

require('./navItem.less')

var NavItem = React.createClass({
  propTypes: {
    page: PropTypes.object,
    selected: PropTypes.bool,
    onItemClick: PropTypes.func
  },
  
  defaultProps: {
    onItemClick: () => {}
  },
  
  render: function() {
    return (
      <Link to={"/" + this.props.page.slug + "/"} className="navItem" activeClassName="navItem--selected">
        <li>
          <h2 className="navItem__label">{this.props.page.name}</h2>
        </li>
      </Link>
    )
  }
})

export default NavItem