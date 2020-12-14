import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

import Modal from './component/Modal';

export class App extends Component {
  state = {
    showModal: false,
    showLoader: true,
  };

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

  render() {
    return (
      <div className="App">
        <button type="button" onClick={this.toggleModal}>
          Открыть модалку
        </button>
        <button type="button" onClick={this.toggleLoader}>
          Loader
        </button>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <h2>Модалочка</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus necessitatibus dicta pariatur nobis quisquam placeat
              corrupti earum accusamus minus ipsum ab possimus repellendus harum
              quod et a saepe nihil doloremque, laudantium debitis recusandae
              error consectetur. Rem, consequatur autem blanditiis amet dolore,
              quam quo dolorum voluptatibus, modi ex quos consectetur alias.
            </p>
            <button type="button" onClick={this.toggleModal}>
              Закрыть
            </button>
          </Modal>
        )}
        {this.state.showLoader && (
          <>
            {/* <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              // timeout={3000} //3 secs
            />
            <Loader type="Audio" color="#00BFFF" height={80} width={80} />
            <Loader
              type="BallTriangle"
              color="#00BFFF"
              height={80}
              width={80}
            />
            <Loader type="Bars" color="#00BFFF" height={80} width={80} />
            <Loader type="Circles" color="#00BFFF" height={80} width={80} />
            <Loader type="Grid" color="#00BFFF" height={80} width={80} />
            <Loader type="Hearts" color="#00BFFF" height={80} width={80} />
            <Loader type="Oval" color="#00BFFF" height={80} width={80} />
            <Loader type="Puff" color="#00BFFF" height={80} width={80} />
            <Loader type="Rings" color="#00BFFF" height={80} width={80} />
            <Loader type="TailSpin" color="#00BFFF" height={80} width={80} /> */}
            <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
          </>
        )}
      </div>
    );
  }
}

export default App;
