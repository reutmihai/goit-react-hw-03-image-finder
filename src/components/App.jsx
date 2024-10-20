import React, { Component } from 'react';
import Searchbar from '../components/Searchbar/Searchbar';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import { getImages } from '../services/imgService';
import { Loader } from './Loader/Loader';
import styles from './App.module.css';
import Button from './Button/Button';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    searchQuery: '',
    isLoading: false,
    images: [],
    error: '',
    page: 1,
  };

  handleSearchSubmit = async searchQuery => {
    try {
      this.setState({ searchQuery, isLoading: true, error: '' , page: 1});
      const images = await getImages(searchQuery);
      if (images.length === 0) {
        this.setState({ images: [], error: 'N-a fost gasit niciun rezultat.' });
        return;
      }

      this.setState({ images });
    } catch (error) {
      this.setState({ images: [], error: 'A apărut o eroare la căutare.' });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  loadMoreImages = async () => {
    this.setState(prevState => ({ isLoading: true, page: prevState.page + 1 }));
    const { searchQuery, page } = this.state;

    try {
      const images = await getImages(searchQuery, page);
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
      }));
    } catch (error) {
      this.setState({ error: 'A aparut o eroare la incarcarea imaginilor.' });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  openModal = (largeImageURL, altText) => {
    this.setState({ showModal: true, largeImageURL, altText });
  };

  closeModal = () => {
    this.setState({ showModal: false, largeImageURL: '', altText: '' });
  };

  render() {
    const { images, error, isLoading, showModal, largeImageURL, altText } =
      this.state;

    return (
      <div className={styles.App}>
        <Searchbar onFormSubmit={this.handleSearchSubmit} />
        <div>
          {error && <div className={styles.error}>{error}</div>}
          {isLoading ? <Loader /> : <ImageGallery images={images} onImageClick={this.openModal}/>}
        </div>
        <Button onClick={this.loadMoreImages} visible={images.length > 0 && !isLoading} />
          {showModal && <Modal largeImageURL={largeImageURL} altText={altText} onClose={this.closeModal} />}
      </div>
    );
  }
}

export default App;
