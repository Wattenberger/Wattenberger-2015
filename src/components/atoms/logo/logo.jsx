import './logo.less';
import React, {Component, PropTypes} from "react"

const Logo = React.createClass({

  propTypes: {
    onItemClick: PropTypes.func
  },

  render: function() {
    return (
      <div className="logo">
        <div className="a"></div>
        <div className="wLeft"></div>
        <div className="wRight"></div>
      </div>
    )
  }
})

export default Logo