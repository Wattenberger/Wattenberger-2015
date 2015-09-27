import './contact.less';

import React from 'react/addons';

const Contact = React.createClass({

  render: function() {
    return (
      <div className="contact page">
            <p>Shoot me an email at <a href="mailto:wattenberger@gmail.com">wattenberger@gmail.com</a>, I’d love to hear from you.</p>
      </div>
    );
  }
});

export default Contact;