import './about.less';

import React from 'react/addons';
import {Link} from 'react-router'

const excited = [
  "generative art",
  "the nuances of data visualization",
  "laser cutting",
  "pressure cooking",
  "weird looking dogs",
  "3d printing",
  "home automation",
  "d3.js",
  "xiao long bao"
]

class About extends React.Component {

  renderList(list) {
    return <ul>
      {list.map(thing =>
        <li>{thing}</li>
      )}
    </ul>
  }

  render() {
    return (
      <div className="about page">
        <p>Hi, I’m Amelia Wattenberger.</p>
        <p>I write code, think about data, and create digital experiences. Currently front-end development & data visualization at <a href="http://umbel.com" target="_blank">Umbel</a> in Austin, TX—the land of breakfast tacos and craft beer.</p>
        <p>Things I get excited about:</p>
        {this.renderList(excited)}
        <p>Feel free to <Link to="/contact/">reach out</Link> to chat about any of the above.</p>
      </div>
    )
  }
}

export default About;