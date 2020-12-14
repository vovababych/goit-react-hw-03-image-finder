import React, { Component } from 'react';
import { createPortal } from 'react-dom';
// import PropTypes from 'prop-types'
import s from './Modal.module.css';

const rootModal = document.querySelector('#rootModal');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={s.backdrop} onClick={this.handleBackdropClick}>
        <div className={s.content}>{this.props.children}</div>
      </div>,
      rootModal,
    );
  }
}

export default Modal;
