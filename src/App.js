import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import fetchApiGallery from './component/api/fetchApiGallary';
import ImageGallery from './component/ImageGallery';

import Modal from './component/Modal';

export class App extends Component {
  state = {
    showModal: false,
    showLoader: false,
    gallary: [],
    error: null,
    largeImage: '',
  };

  componentDidMount() {
    this.setState({ showLoader: true });

    fetchApiGallery()
      .then(gallary => this.setState({ gallary }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ showLoader: false }));
  }

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  toggleLoader = () => {
    this.setState(prevState => ({
      showLoader: !prevState.showLoader,
    }));
  };

  handleOpenPicture = e => {
    this.setState({ largeImage: e.target.dataset.largeimage });
    this.toggleModal();
  };

  render() {
    const { showLoader, showModal, gallary, largeImage } = this.state;
    return (
      <div className="App">
        <button type="button" onClick={this.toggleModal}>
          Открыть модалку
        </button>
        <button type="button" onClick={this.toggleLoader}>
          Loader
        </button>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImage} alt="" />
            <button type="button" onClick={this.toggleModal}>
              Закрыть
            </button>
          </Modal>
        )}
        {showLoader && (
          <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
        )}
        {gallary.total && (
          <ImageGallery
            gallary={gallary.hits}
            onOpenPicture={this.handleOpenPicture}
          />
        )}
      </div>
    );
  }
}

export default App;
