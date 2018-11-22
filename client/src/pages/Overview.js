import React, { Component } from 'react';

class Overview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stuff: 'Hello'
    };
  }

  componentDidMount() {
    this.callAPI()
        .then(body => this.setState({ stuff: body.stuff }))
        .catch(err => console.log(err));
  }

  callAPI = async () => {
    const response = await fetch('/Overview');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div>
        { this.state.stuff }
      </div>
    );
  }
}

export default Overview;
