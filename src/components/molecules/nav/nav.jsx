import './nav.less';
import {Link} from 'react-router'
import Logo from "./../../atoms/logo/logo"
import NavItem from "./navItem/navItem"

import React, {PropTypes} from 'react/addons';
const pages = [
  {name: "About", slug: "about"},
  // {name: "Thoughts", slug: "thoughts"},
  {name: "Contact", slug: "contact"},
]

var Nav = React.createClass({

  propTypes: {
    selectedPage: PropTypes.string,
    onItemClick: PropTypes.func
  },

  defaultProps: {
    selectedPage: ""
  },

  render: function() {
    return (
      <div className="nav">
        <ul className="navList">
          <Link to="/about/"><Logo /></Link>
          {pages.map((page, idx) => {
            if (page.name) return <NavItem page={page}
              selected={this.props.selectedPage === page.slug}
              onItemClick={this.props.onItemClick}
              key={idx} />
          })}
        </ul>
      </div>
    );
  }
});

export default Nav;
