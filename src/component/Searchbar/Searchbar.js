import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    inputSearch: '',
  };

  handleInputSearch = e => {
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
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            value={this.state.inputSearch}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputSearch}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
