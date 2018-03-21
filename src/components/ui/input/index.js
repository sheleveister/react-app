import React, { PropTypes } from 'react';
import classname from 'classname';

import './style.less';

export default class Input extends React.Component {

  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    divClasses: PropTypes.string,
    error: PropTypes.string
  };

  constructor(props) {
    super(props);

    const { value } = this.props;
    this.state = { value };
  }

  handleChange(event) {
    const { value } = event.target;
    this.props.onChange(value);
    this.setState({ value });
  }

  render() {
    const divClasses = classname({
      'form-group': true,
      'has-error': this.props.error
    });

    const { value } = this.props;

    return (
      <div className={ divClasses }>
        <input className="form-control input-text"
          type="text"
          value={ value }
          onChange={ this.handleChange.bind(this) }/>
        { this.props.error ? <div className="help-block">{ this.props.error }</div> : null }
      </div>
    );
  }

}
