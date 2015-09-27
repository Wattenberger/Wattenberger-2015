import './about.less';

import React from 'react/addons';
import Header from '../../molecules/header/header';
import Card from '../../molecules/card/card';

const About = React.createClass({

  render: function() {
    return (
      <div className="about">
        <Header headerText='About' />
        <div className="main">
          <Card>
            <h2>About Me</h2>
            <hr />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sequitur disserendi ratio cognitioque naturae; Aliter autem vobis placet. Nam de isto magna dissensio est. Apud ceteros autem philosophos, qui quaesivit aliquid, tacet; Huius ego nunc auctoritatem sequens idem faciam. Ergo hoc quidem apparet, nos ad agendum esse natos. Cetera illa adhibebat, quibus demptis negat se Epicurus intellegere quid sit bonum. Duo Reges: constructio interrete.</p>
          </Card>
        </div>
      </div>
    );
  }
});

export default About;