import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Searchbar from './component/Searchbar';
import Loader from 'react-loader-spinner';
import fetchApiGallery from './component/api/fetchApiGallary';
import ImageGallery from './component/ImageGallery';
import LoadMore from './component/LoadMore';

import Modal from './component/Modal';

export class App extends Component {
  state = {
    showModal: false,
    showLoader: false,
    gallary: [],
    error: 'Error',
    largeImage: '',
    inputSearch: '',
    page: 1,
    total: 0,
  };

  componentDidMount() {
    this.toggleLoader();
    const { inputSearch, page } = this.state;
    fetchApiGallery(inputSearch, page)
      .then(gallary => {
        this.setState({
          gallary: gallary.hits,
          total: gallary.total,
        });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.toggleLoader());
  }

  componentDidUpdate(prevProps, prevState) {
    const { inputSearch, page } = this.state;

    if (prevState.inputSearch !== inputSearch || prevState.page !== page) {
      this.toggleLoader();

      fetchApiGallery(inputSearch, page)
        .then(gallary => {
          this.setState({
            gallary: [...prevState.gallary, ...gallary.hits],
            total: gallary.total,
          });
        })
        .catch(error => this.setState({ error }))
        .finally(() => this.toggleLoader());
    }
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
    // this.toggleLoader();
    this.setState({ largeImage: e.target.dataset.largeimage });
    this.toggleModal();

    // this.toggleLoader();
  };

  handleSubmitForm = inputSearch => {
    console.log(inputSearch);
    this.setState({ inputSearch });
    this.setState({ page: 1 });
  };

  handleLoadMore = () => {
    this.toggleLoader();
    this.setState(({ page }) => {
      return { page: page + 1 };
    });
    this.toggleLoader();
  };

  showLoadMore = () => {
    const { total, page } = this.state;
    return total - page * 20 > 0;
  };

  render() {
    const { showLoader, showModal, gallary, largeImage } = this.state;
    const showLoadMore = this.showLoadMore();
    return (
      <div className="App">
        {/* <button type="button" onClick={this.toggleModal}>
          Открыть модалку
        </button>
        <button type="button" onClick={this.toggleLoader}>
          Loader
        </button> */}

        <Searchbar onSubmit={this.handleSubmitForm} />

        {showModal && (
          <Modal onClose={this.toggleModal}>
            {showLoader && (
              <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
            )}
            <img src={largeImage} alt="" />
            {/* <button type="button" onClick={this.toggleModal}>
              Закрыть
            </button> */}
          </Modal>
        )}

        {gallary.length ? (
          <ImageGallery
            gallary={gallary}
            onOpenPicture={this.handleOpenPicture}
          />
        ) : null}

        {showLoader && (
          <div className="loader">
            <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
          </div>
        )}

        {showLoadMore && (
          <LoadMore onLoadMore={this.handleLoadMore} showBtn={showLoader} />
        )}
      </div>
    );
  }
}

export default App;
