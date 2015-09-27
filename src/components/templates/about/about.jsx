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
  "home automation"
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
        <p>I write code, think about data, and create digital experiences. Currently working at <a href="http://umbel.com" target="_blank">Umbel</a> in Austin, TX—the land of breakfast tacos and craft beer.</p>
        <p>Things I get excited about:</p>
        {this.renderList(excited)}
        <p>Feel free to <Link to="/contact/">reach out</Link> if you have an absurd interest in any of these things.</p>
      </div>
    )
  }
}

export default About;