import React, { Component } from 'react';

class Footer extends Component {
  render(props) {
    return (
      <div>
        <p> Copyright {this.props.year}</p>
      </div>

    );
  }
}

export default Footer;