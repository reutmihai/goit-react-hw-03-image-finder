import React, { Component } from 'react';
import Searchbar from '../components/Searchbar/Searchbar';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import { getImages } from '../services/imgService';
import { Loader } from './Loader/Loader';
import styles from './App.module.css';
class App extends Component {
  state = {
    searchQuery: '',
    isLoading: false,
    images: [],
    error: '',
  };

  handleSearchSubmit = async searchQuery => {
    try {
      this.setState({ searchQuery, isLoading: true, error: '' });
      const images = await getImages(searchQuery);
      this.setState({ images });
    } catch (error) {
      if (error.code) {
        this.setState({ error: 'N-a fost gasit niciun rezultat.' });
      }
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { images, error, isLoading } = this.state;

    return (
      <div className={styles.App}>
        {error && <div className={styles.error}>{error}</div>}
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <div>{isLoading ? <Loader /> : <ImageGallery images={images} />}</div>
      </div>
    );
  }
}

export default App;
