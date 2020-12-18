import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import s from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    inputSearch: '',
  };

  handleInputChange = e => {
    this.setState({ inputSearch: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(this.state.inputSearch);
    this.reset();
  };

  reset = () => {
    this.setState({ inputSearch: '' });
  };

  render() {
    return (
      <header className={s.container}>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.button}>
            <span className={s.buttonLabel}>Search</span>
          </button>

          <input
            className={s.input}
            type="text"
            value={this.state.inputSearch}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
