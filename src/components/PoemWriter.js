import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: "",
      valid: false
    };
  }

  handleChange = (event) => {
    const target = event.target;
    this.validate(target);
    this.setState({poem: target.value});
  }

  validate(target) {
    let valid = false;

    if(target.value.match(/\n/g)) {
      const lines = target.value.split(/\n/g);
      const firstThree = lines.slice(0, 3);

      valid = firstThree.every((line, i) => {
        const lineWords = line.split(" ");
        return lineWords.length >= this.props.rules.words[ i + 1 ]
      });
    }

    this.setState({valid: valid}, this.showError);
  }

  render() {
    return (
      <div>
        <textarea onChange={this.handleChange}
          rows="3"
          cols="60"
        defaultValue={this.state.poem} />
        { !this.state.valid ? <div
          id="poem-validation-error"
          style={{color: 'red'}}
        >
          This poem is not written in the right structure!
        </div> : ""}
      </div>
    );
  }
}

PoemWriter.defaultProps = {
  rules: {
    lines: 3,
    words: {
      1: 5,
      2: 3,
      3: 5
    }
  }
}

export default PoemWriter;
