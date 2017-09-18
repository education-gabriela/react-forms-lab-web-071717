import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: ''
    };
  }

  handleChange = (event) => {
    const myEvent = event;
    const elementValue = myEvent.target.value;

    this.setState({
      value: elementValue,
      message: elementValue

    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} max onChange={this.handleChange} />
        <p>{this.props.maxChars - this.state.message.length} characters remaining </p>
      </div>
    );
  }
}

export default TwitterMessage;
