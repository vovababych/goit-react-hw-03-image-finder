import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Modal from './component/Modal';

export class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    console.log();
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    return (
      <div className="App">
        <button type="button" onClick={this.toggleModal}>
          Открыть модалку
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
      </div>
    );
  }
}

export default App;
