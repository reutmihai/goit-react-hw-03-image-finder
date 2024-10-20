import React, { Component } from 'react';
import Searchbar from '../components/Searchbar/Searchbar';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import { getImages } from '../services/imgService'; 
import styles from './App.module.css';
class App extends Component {
  state = {
    searchQuery: '',
    images: [],
  };

  handleSearchSubmit = async searchQuery => {
    this.setState({ searchQuery }); 
    const images = await getImages(searchQuery); 
    this.setState({ images });
  };

  render() {
    const { searchQuery, images } = this.state;

    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery images={images} />{' '}
      </div>
    );
  }
}

export default App;
