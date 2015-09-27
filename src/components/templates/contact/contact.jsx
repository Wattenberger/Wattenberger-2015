import './contact.less';

import React from 'react/addons';
import Header from '../../molecules/header/header';
import Card from '../../molecules/card/card';

const Contact = React.createClass({

  render: function() {
    return (
      <div className="contact">
        <Header headerText='Contact' />
        <div className="main">
          <Card>
            <h2>Contact Me</h2>
            <hr />
            <p>Shoot me an email at <a href="mailto:wattenberger@gmail.com">wattenberger@gmail.com</a>, I’d love to hear from you.</p>
          </Card>
        </div>
      </div>
    );
  }
});

export default Contact;