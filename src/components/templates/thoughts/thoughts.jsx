import './thoughts.less';

import React from 'react/addons';
import Header from '../../molecules/header/header';
import Card from '../../molecules/card/card';

const Thoughts = React.createClass({

  render: function() {
    return (
      <div className="thoughts">
        <Header headerText='Thoughts' />
        <div className="main">
          <Card>
            <h2>Thoughts Me</h2>
            <hr />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc loco tenere se Triarius non potuit. Nihil ad rem! Ne sit sane; Confecta res esset. Ut id aliis narrare gestiant? Haec dicuntur fortasse ieiunius; Duo Reges: constructio interrete. Hosne igitur laudas et hanc eorum, inquam, sententiam sequi nos censes oportere? Proclivi currit oratio.</p>
          </Card>
        </div>
      </div>
    );
  }
});

export default Thoughts;