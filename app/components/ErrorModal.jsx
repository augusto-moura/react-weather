import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

class ErrorModal extends Component {

  componentDidMount() {
    const { title, message } = this.props;

    const modalMarkup = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <button className="button hollow" data-close="">Okay</button>
      </div>
    );

    const $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    const modal = new Foundation.Reveal($modal);
    modal.open();
  }

  render() {
    return <div />;
  }
}

ErrorModal.defaultProps = {
  title: 'Error',
};

ErrorModal.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string.isRequired,
};

export default ErrorModal;
